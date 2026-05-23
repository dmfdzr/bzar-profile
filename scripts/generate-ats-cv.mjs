import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outputPath = join(process.cwd(), "public", "dimas-abidzar-fadly-ats-cv.pdf");

const sections = [
  {
    title: "P R O F I L E",
    lines: [
      "I am a graduate of Information Systems with a strong passion for web development, particularly in programming, website UI/UX design, and the creation of responsive and innovative websites. Equipped with a solid foundation in various programming languages, modern web technologies, and user interface design principles, I am committed to continuously enhancing my skills and knowledge in this field. I firmly believe that strong technical capabilities, combined with thoughtful design, are essential to delivering exceptional user experiences and high-quality digital solutions.",
    ],
  },
  {
    title: "E X P E R I E N C E",
    lines: [
      "PT. Sumber Alfaria Trijaya, Tbk",
      "November 2025 - May 2026",
      "BUILDING AND MAINTENANCE DIGITAL STORE (INTERNSHIP)",
      "Currently participating in a comprehensive frontend development internship, actively contributing to enterprise application SPARTA Building. Leveraging Vanilla JavaScript for core system logic and Next.js (TypeScript) for modern scalable architecture. During the internship, I am involved in the following activities:",
      "- Developing the Sparta Building application using Vanilla JavaScript, focusing on efficient DOM manipulation and lightweight performance.",
      "- Migrate the Sparta Building platform using Next.js and TypeScript to ensure type safety and modular component architecture.",
      "- Integrating RESTful APIs across both platforms to facilitate real-time data exchange and dynamic content rendering.",
      "- Focused on writing clean, maintainable code and optimizing frontend performance to meet specific business requirements for both systems.",
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
      "Micro Project",
      "- Product Research (Freelance Website)",
      "- Designed Wireframe Product",
      "- Designed High Fidelity Product",
      "- Making Prototype Product",
      "Massive Project",
      "- Product Research (Mental Health Service Website)",
      "- Designed Wireframe Product",
      "- Designed High Fidelity Product",
      "- Making Prototype Product",
      "- Developing Front End Website",
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
    title: "S K I L L",
    columns: [
      {
        title: "Hard Skills",
        lines: [
          "MySQL",
          "Microsoft SQL Server (SSMS)",
          "JavaScript",
          "Typescript",
          "React",
          "NextJS",
          "TailwindCSS",
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
  { text: "+6285727914053 | dimasfadly01@gmail.com | https://bzar-here.vercel.app", size: 9.8, gapAfter: 20, align: "center" },
];

const page = {
  width: 612,
  height: 792,
  marginX: 50,
  marginTop: 50,
  marginBottom: 48,
};

function sanitize(text) {
  return text.replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "-");
}

function escapePdf(text) {
  return sanitize(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapLine(text, size, x = page.marginX) {
  const availableWidth = page.width - page.marginX - x;
  const maxChars = Math.max(34, Math.floor(availableWidth / (size * 0.48)));
  const words = sanitize(text).split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function ensurePageSpace(pages, state, requiredHeight) {
  if (state.y < page.marginBottom + requiredHeight) {
    pages.push([]);
    state.y = page.height - page.marginTop;
  }
}

function textWidth(text, size) {
  return sanitize(text).length * size * 0.48;
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
    leading = 5,
  } = options;
  const baseX = page.marginX + indent;
  const wrapped = text === "" ? [""] : wrapLine(text, size, baseX);

  wrapped.forEach((line, index) => {
    ensurePageSpace(pages, state, size + gapAfter);

    const x = align === "center"
      ? Math.max(page.marginX, (page.width - textWidth(line, size)) / 2)
      : baseX + (index > 0 ? hangingIndent : 0);

    pages.at(-1).push({ type: "text", text: line, size, x, y: state.y, bold });
    state.y -= size + leading;
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
  state.y -= 18;

  for (let index = 0; index < maxRows; index += 1) {
    const left = columns[0].lines[index];
    const right = columns[1].lines[index];

    if (left) {
      pushFixedLine(pages, state, `- ${left}`, leftX + 12, 9.4);
    }

    if (right) {
      pushFixedLine(pages, state, `- ${right}`, rightX + 12, 9.4);
    }

    state.y -= 16;
  }
}

function lineStyle(text) {
  if (text === "") {
    return { size: 9.4, gapAfter: 8 };
  }

  if (text.startsWith("- ")) {
    return { size: 9.4, gapAfter: 3, indent: 12, hangingIndent: 10, leading: 5.2 };
  }

  if (text.startsWith("PT.") || text === "Amikom Yogyakarta University") {
    return { size: 10.5, gapAfter: 3, bold: true, leading: 5 };
  }

  if (text === "Micro Project" || text === "Massive Project" || text === "Hard Skills" || text === "Soft Skills") {
    return { size: 9.8, gapAfter: 4, bold: true, leading: 5 };
  }

  if (text === text.toUpperCase() && /[A-Z]/.test(text)) {
    return { size: 9.8, gapAfter: 5, bold: true, leading: 5 };
  }

  if (/^\d{4}|^(January|February|March|April|May|June|July|August|September|October|November|December)/.test(text)) {
    return { size: 9.2, gapAfter: 5, leading: 5 };
  }

  return { size: 9.5, gapAfter: 5, leading: 5.4 };
}

function buildLines() {
  const pages = [[]];
  const state = { y: page.height - page.marginTop };

  for (const item of header) {
    pushLine(pages, state, item.text, item.size, item.gapAfter, item);
  }

  for (const section of sections) {
    ensurePageSpace(pages, state, 46);
    pushLine(pages, state, section.title, 11.5, 5, { bold: true, leading: 5 });
    pushDivider(pages, state, 12);
    if (section.columns) {
      pushSkillColumns(pages, state, section.columns);
    } else {
      for (const line of section.lines) {
        const style = lineStyle(line);
        pushLine(pages, state, line, style.size, style.gapAfter, style);
      }
    }
    state.y -= 10;
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
    commands.push(`1 0 0 1 ${item.x} ${item.y} Tm`);
    commands.push(`(${escapePdf(item.text)}) Tj`);
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
