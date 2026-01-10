"use client";

import type { CreatorProfile } from "./types";

function k(username: string) {
  return `biolink_profile_${(username || "").toLowerCase().trim()}`;
}

export function saveProfileOverride(profile: CreatorProfile) {
  localStorage.setItem(k(profile.username), JSON.stringify(profile));
}

export function loadProfileOverride(username: string): CreatorProfile | null {
  try {
    const raw = localStorage.getItem(k(username));
    if (!raw) return null;
    return JSON.parse(raw) as CreatorProfile;
  } catch {
    return null;
  }
}

export function clearProfileOverride(username: string) {
  localStorage.removeItem(k(username));
}
