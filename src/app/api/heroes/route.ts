import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const HEROES_PATH = path.join(process.cwd(), "src/lib/heroes.json");

export async function GET() {
  try {
    const data = fs.readFileSync(HEROES_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectId, renderingIndex, photoIndex } = body;

    // Read current heroes
    let heroes: Record<string, { renderingIndex: number; photoIndex: number }> =
      {};
    try {
      heroes = JSON.parse(fs.readFileSync(HEROES_PATH, "utf-8"));
    } catch {
      // Start fresh if file doesn't exist
    }

    // Update the specific project
    heroes[projectId] = {
      renderingIndex: renderingIndex ?? heroes[projectId]?.renderingIndex ?? 0,
      photoIndex: photoIndex ?? heroes[projectId]?.photoIndex ?? 0,
    };

    // Write back
    fs.writeFileSync(HEROES_PATH, JSON.stringify(heroes, null, 2) + "\n");

    return NextResponse.json({ success: true, heroes });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save hero selection" },
      { status: 500 }
    );
  }
}
