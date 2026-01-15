import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Page from "./page";

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("Page", () => {
  it("renders title", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
  });
});
