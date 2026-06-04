import { NextResponse } from "next/server";
import { FALLBACK_PROJECTS, PROJECT_REPO_PRIORITY } from "@/lib/project-data";

export const revalidate = 3600;

const GITHUB_REPOS_URL = "https://api.github.com/users/dmfdzr/repos?sort=updated&per_page=100";

function normalizeUrl(url) {
  if (!url) return null;
  return url.endsWith(".git") ? url.slice(0, -4) : url;
}

function mergeGithubRepo(repo, fallback) {
  return {
    name: repo.name,
    title: repo.name,
    description: fallback?.description ?? {
      en: repo.description || "Public repository from the GitHub profile.",
      id: repo.description || "Repository publik dari profil GitHub.",
    },
    sourceUrl: normalizeUrl(repo.html_url),
    liveUrl: repo.homepage || fallback?.liveUrl || null,
    language: repo.language || fallback?.language || "Repository",
    stack: fallback?.stack ?? [repo.language].filter(Boolean),
    updatedAt: repo.pushed_at || repo.updated_at,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
  };
}

function buildGithubErrorResponse(reason, status = 502) {
  return NextResponse.json(
    {
      source: "github",
      reason,
      projects: [],
    },
    { status },
  );
}

export async function GET() {
  try {
    const response = await fetch(GITHUB_REPOS_URL, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return buildGithubErrorResponse(`github-${response.status}`, response.status);
    }

    const repos = await response.json();
    const byName = new Map(repos.map((repo) => [repo.name, repo]));
    const fallbackByName = new Map(FALLBACK_PROJECTS.map((project) => [project.name, project]));

    const prioritized = PROJECT_REPO_PRIORITY
      .map((name) => byName.get(name))
      .filter(Boolean)
      .map((repo) => mergeGithubRepo(repo, fallbackByName.get(repo.name)));

    const recent = repos
      .filter((repo) => !PROJECT_REPO_PRIORITY.includes(repo.name))
      .map((repo) => mergeGithubRepo(repo, fallbackByName.get(repo.name)));

    const projects = [...prioritized, ...recent];

    return NextResponse.json({
      source: "github",
      total: projects.length,
      projects,
    });
  } catch (error) {
    return buildGithubErrorResponse(error instanceof Error ? error.message : "github-request-failed");
  }
}
