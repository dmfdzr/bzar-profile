import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outputPath = join(process.cwd(), "public", "dimas-abidzar-fadly-ats-cv.pdf");

const sections = [
  {
    title: "P R O F I L E",
    lines: [
      "A highly motivated Application Support Engineer with a strong foundation in web architecture and operational stability. As a dedicated problem solver, I am committed to continuously learning best practices and delivering highly reliable applications.",
    ],
  },
  {
    title: "E X P E R I E N C E",
    lines: [
      "PT. Kreasi Media Asia",
      "July 2024 - Present",
      "L2 OPERATIONS (CONTRACT)",
      "- Operation Monitoring: Monitor logs and system behavior using Datadog and internal tools to ensure stable operational flows.",
      "- Issue Investigation: Isolate edge-cases in user complaints, trace root causes, and reproduce bugs to provide clear contexts for developers.",
      "- Bug Triage: Filter out non-technical issues, categorize incidents by severity, and route them to appropriate engineering units.",
      "- Service Reporting: Document common issues to improve Standard Operating Procedures and knowledge base.",
      "",
      "PT. Sumber Alfaria Trijaya, Tbk",
      "November 2025 - May 2026",
      "BUILDING AND MAINTENANCE DIGITAL STORE (INTERNSHIP)",
      "Participated in a comprehensive frontend development internship, actively contributing to the enterprise application \"SPARTA Building\", a national scale platform utilized for documenting and managing every phase of the construction process for new Alfamart stores. During the internship, I was deeply involved in both maintaining the legacy system and engineering its modern architecture:",
      "- Core System Development: Developed and maintained the application using Vanilla JavaScript, focusing on efficient DOM manipulation and lightweight runtime performance.",
      "- Modernization & Migration: Migrated the platform to a modern stack using Next.js and TypeScript, establishing a modular component architecture and ensuring strict type safety for better long-term scalability.",
      "- API Integration: Integrated RESTful APIs across both legacy and modern platforms, managing efficient payload handling, real-time data exchange, and dynamic content rendering.",
      "- Performance & Code Quality: Consistently applied clean code principles and optimized frontend rendering to meet specific business requirements, minimizing technical debt throughout the migration process.",
      "",
      "PT. Indocyber Global Teknologi",
      "September 2025 - October 2025",
      "MICROSOFT SQL SERVER (WORK TRAINING)",
      "Completed a work training program focused on web development and database management. Currently strengthening skills in Microsoft SQL Server (SSMS) for database design, data querying, and performance optimization. During the training, I was involved in the following activities:",
      "- Learned practical skills in database management using Microsoft SQL Server (SSMS).",
      "- Designed and optimized relational databases to support real-world applications.",
      "- Practiced backend-database integration using SQL queries and stored procedures.",
      "- Focused on data handling, query performance, and reporting for work-related scenarios.",
      "",
      "PT. Kinema Systrans",
      "February 2024 - June 2024",
      "WEB DEVELOPMENT & UI/UX DESIGN (INDEPENDENT STUDY)",
      "Participated in the national Studi Independen program, an intensive study focused on end-to-end product design and frontend web development. During the activity, I was involved in the following activities:",
      "- Handled product research for freelance and mental health service website concepts.",
      "- Designed wireframes and high-fidelity interfaces in Figma.",
      "- Created clickable prototypes to validate user flows before implementation.",
      "- Developed frontend pages based on the validated design direction.",
    ],
  },
  {
    title: "E D U C A T I O N",
    lines: [
      "Amikom Yogyakarta University",
      "2021 - 2025",
      "Bachelor of Information System",
      "GPA 3.68",
    ],
  },
  {
    title: "S K I L L S",
    columns: [
      {
        title: "Hard Skills",
        lines: [
          "Microsoft SQL Server (SSMS)",
          "JavaScript",
          "Typescript",
          "React & Next.js",
          "Node.js & RESTful API",
          "Prisma ORM & PostgreSQL",
          "Supabase",
          "Tailwind CSS",
          "Docker & Linux",
          "Vercel & Render",
        ],
      },
      {
        title: "Soft Skills",
        lines: [
          "Effective Communication",
          "Problem Solving",
          "Time Management",
          "Adaptability & Fast Learner",
          "Attention to Detail",
          "Team Collaboration",
          "Multitasking Ability",
        ],
      },
    ],
  },
];

const header = [
  { text: "D I M A S  A B I D Z A R  F A D L Y", size: 19, gapAfter: 8, align: "center", bold: true },
  { text: "+6285727914053 | dimasfadly01@gmail.com | https://bzarhere.my.id", size: 9.8, gapAfter: 20, align: "center" },
];

const page = {
  width: 612,
  height: 792,
  marginX: 50,
  marginTop: 42,
  marginBottom: 36,
};

function sanitize(text) {
  return text.replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "-");
}

function escapePdf(text) {
  return sanitize(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapLine(text, size, x = page.marginX) {
  const availableWidth = page.width - page.marginX - x;
  const words = sanitize(text).split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (textWidth(candidate, size) > availableWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function contentWidth(x = page.marginX) {
  return page.width - page.marginX - x;
}

function ensurePageSpace(pages, state, requiredHeight) {
  if (state.y < page.marginBottom + requiredHeight) {
    pages.push([]);
    state.y = page.height - page.marginTop;
  }
}

const helveticaWidths = {
  a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222, k: 500, l: 222, m: 833, n: 556, o: 556, p: 556, q: 556, r: 333, s: 500, t: 278, u: 556, v: 500, w: 722, x: 500, y: 500, z: 500,
  A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500, K: 667, L: 556, M: 833, N: 722, O: 778, P: 667, Q: 778, R: 722, S: 667, T: 611, U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611,
  "0": 556, "1": 556, "2": 556, "3": 556, "4": 556, "5": 556, "6": 556, "7": 556, "8": 556, "9": 556,
  " ": 278, ".": 278, ",": 278, "-": 333, ":": 278, ";": 278, "(": 333, ")": 333,
};

function textWidth(text, size) {
  let width = 0;
  for (const char of sanitize(text)) {
    width += (helveticaWidths[char] || 500) / 1000;
  }
  return width * size;
}

function pushDivider(pages, state, gapAfter = 8) {
  ensurePageSpace(pages, state, gapAfter + 4);
  pages.at(-1).push({
    type: "line",
    x1: page.marginX,
    x2: page.width - page.marginX,
    y: state.y,
  });
  state.y -= gapAfter;
}

function pushLine(pages, state, text, size = 10, gapAfter = 4, options = {}) {
  const {
    align = "left",
    bold = false,
    indent = 0,
    hangingIndent = 0,
    lineHeight = 1.5,
    justify = false,
  } = options;
  const baseX = page.marginX + indent;
  const wrapped = text === "" ? [""] : wrapLine(text, size, baseX);
  const lineAdvance = size * lineHeight;

  wrapped.forEach((line, index) => {
    ensurePageSpace(pages, state, size + gapAfter);
    const isLastWrappedLine = index === wrapped.length - 1;

    const x = align === "center"
      ? Math.max(page.marginX, (page.width - textWidth(line, size)) / 2)
      : baseX + (index > 0 ? hangingIndent : 0);
    const shouldJustify = justify && !isLastWrappedLine && line.includes(" ");
    const availableWidth = contentWidth(x);
    const wordGaps = Math.max(1, line.split(" ").length - 1);
    const wordSpacing = shouldJustify
      ? Math.max(0, (availableWidth - textWidth(line, size)) / wordGaps)
      : 0;

    pages.at(-1).push({ type: "text", text: line, size, x, y: state.y, bold, wordSpacing });
    state.y -= lineAdvance;
  });

  state.y -= gapAfter;
}

function pushFixedLine(pages, state, text, x, size = 10, options = {}) {
  ensurePageSpace(pages, state, size + 4);
  pages.at(-1).push({
    type: "text",
    text,
    size,
    x,
    y: state.y,
    bold: options.bold ?? false,
    wordSpacing: 0,
  });
}

function pushSkillColumns(pages, state, columns) {
  const gap = 36;
  const columnWidth = (page.width - page.marginX * 2 - gap) / 2;
  const leftX = page.marginX;
  const rightX = page.marginX + columnWidth + gap;
  const maxRows = Math.max(...columns.map((column) => column.lines.length));

  ensurePageSpace(pages, state, 34 + maxRows * 16);

  pushFixedLine(pages, state, columns[0].title, leftX, 10, { bold: true });
  pushFixedLine(pages, state, columns[1].title, rightX, 10, { bold: true });
  state.y -= 16;

  for (let index = 0; index < maxRows; index += 1) {
    const left = columns[0].lines[index];
    const right = columns[1].lines[index];

    if (left) {
      pushFixedLine(pages, state, `- ${left}`, leftX + 12, 9.4);
    }

    if (right) {
      pushFixedLine(pages, state, `- ${right}`, rightX + 12, 9.4);
    }

    state.y -= 15;
  }
}

function lineStyle(text) {
  if (text === "") {
    return { size: 9.4, gapAfter: 10 };
  }

  if (text.startsWith("- ")) {
    return { size: 9.4, gapAfter: 4, indent: 12, hangingIndent: 10, lineHeight: 1.55, justify: true };
  }

  if (text.startsWith("PT.") || text === "Amikom Yogyakarta University") {
    return { size: 10.5, gapAfter: 4, bold: true, lineHeight: 1.55, justify: true };
  }

  if (text === "Micro Project" || text === "Massive Project" || text === "Hard Skills" || text === "Soft Skills") {
    return { size: 9.8, gapAfter: 5, bold: true, lineHeight: 1.55, justify: true };
  }

  if (text === text.toUpperCase() && /[A-Z]/.test(text)) {
    return { size: 9.8, gapAfter: 6, bold: true, lineHeight: 1.55, justify: true };
  }

  if (/^\d{4}|^(January|February|March|April|May|June|July|August|September|October|November|December)/.test(text)) {
    return { size: 9.2, gapAfter: 6, lineHeight: 1.55, justify: true };
  }

  return { size: 9.5, gapAfter: 6, lineHeight: 1.55, justify: true };
}

function buildLines() {
  const pages = [[]];
  const state = { y: page.height - page.marginTop };

  for (const item of header) {
    pushLine(pages, state, item.text, item.size, item.gapAfter, item);
  }

  for (const section of sections) {
    ensurePageSpace(pages, state, 46);
    pushLine(pages, state, section.title, 11.5, 0, { bold: true, lineHeight: 0.85, justify: true });
    pushDivider(pages, state, 16);
    if (section.columns) {
      pushSkillColumns(pages, state, section.columns);
    } else {
      for (const line of section.lines) {
        if (line === "PT. Indocyber Global Teknologi" && pages.at(-1).length > 0) {
          pages.push([]);
          state.y = page.height - page.marginTop;
        }

        const style = lineStyle(line);
        pushLine(pages, state, line, style.size, style.gapAfter, style);
      }
    }
    state.y -= 15;
  }

  return pages;
}

function streamFor(items) {
  const commands = [];

  for (const item of items) {
    if (item.type === "line") {
      commands.push("q");
      commands.push("0.6 w");
      commands.push(`${item.x1} ${item.y} m`);
      commands.push(`${item.x2} ${item.y} l`);
      commands.push("S");
      commands.push("Q");
      continue;
    }

    commands.push("BT");
    commands.push(`/${item.bold ? "F2" : "F1"} ${item.size} Tf`);
    if (item.wordSpacing) {
      commands.push(`${item.wordSpacing.toFixed(3)} Tw`);
    }
    commands.push(`1 0 0 1 ${item.x} ${item.y} Tm`);
    commands.push(`(${escapePdf(item.text)}) Tj`);
    if (item.wordSpacing) {
      commands.push("0 Tw");
    }
    commands.push("ET");
  }

  return commands.join("\n");
}

function createPdf() {
  const linesByPage = buildLines();
  const objects = [];

  objects.push("<< /Type /Catalog /Pages 2 0 R >>");

  const pageObjectIds = linesByPage.map((_, index) => 3 + index * 2);
  objects.push(`<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`);

  linesByPage.forEach((lines, index) => {
    const pageId = 3 + index * 2;
    const contentId = pageId + 1;
    const stream = streamFor(lines);

    const normalFontId = 3 + linesByPage.length * 2;
    const boldFontId = normalFontId + 1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${normalFontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    objects.push(`<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}\nendstream`);
  });

  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "ascii"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

writeFileSync(outputPath, createPdf(), "ascii");
console.log(`Generated ${outputPath}`);
