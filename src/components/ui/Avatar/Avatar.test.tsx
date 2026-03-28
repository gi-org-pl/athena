import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Avatar } from "./Avatar";

vi.mock("@/assets/icons/gi-male.svg", () => ({
  default: () => <svg data-testid="male-icon" />,
}));
vi.mock("@/assets/icons/gi-female.svg", () => ({
  default: () => <svg data-testid="female-icon" />,
}));

describe("Accessibility", () => {
  it("should use an empty alt string and hide role when name/alt are missing", () => {
    render(<Avatar src="valid.jpg" />);
    const img = document.querySelector("img");

    expect(img).toHaveAttribute("alt", "");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should prioritize name for aria-label and append 'avatar'", () => {
    render(<Avatar name="John Doe" />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("aria-label", "John Doe avatar");
  });

  it("should fallback to alt text for aria-label if name is missing", () => {
    render(<Avatar alt="Custom Alt Text" />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("aria-label", "Custom Alt Text");
  });
});

describe("<Avatar />", () => {
  describe("Internationalization & Initials", () => {
    it("should correctly handle Japanese names (Kanji/Kana)", () => {
      render(<Avatar name="山田 太郎" fallback="initials" />);
      expect(screen.getByText("山太")).toBeInTheDocument();
    });

    it("should correctly handle Chinese names (Hanzi)", () => {
      render(<Avatar name="李 小龍" fallback="initials" />);
      expect(screen.getByText("李小")).toBeInTheDocument();
    });

    it("should handle Chinese names with three distinct parts", () => {
      render(<Avatar name="李 小 龍" fallback="initials" />);
      expect(screen.getByText("李龍")).toBeInTheDocument();
    });

    it("should correctly handle Korean names (Hangul)", () => {
      render(<Avatar name="박 지성" fallback="initials" />);
      expect(screen.getByText("박지")).toBeInTheDocument();
    });

    it("should correctly handle Cyrillic Ukrainian names with diacritics", () => {
      render(<Avatar name="Йосип Євгенійович" fallback="initials" />);
      expect(screen.getByText("ЙЄ")).toBeInTheDocument();
    });

    it("should handle hyphenated Cyrillic surnames as a single block", () => {
      render(<Avatar name="Марія Квітка-Основ'яненко" fallback="initials" />);
      expect(screen.getByText("МК")).toBeInTheDocument();
    });

    it("should correctly handle Arabic names (Right-to-Left)", () => {
      render(<Avatar name="أحمد علي" fallback="initials" />);
      expect(screen.getByText("أع")).toBeInTheDocument();
    });
    it("should fallback to default icon when name is only whitespace", () => {
      render(<Avatar name="   " fallback="initials" />);

      expect(screen.queryByText(/[A-Z]/)).not.toBeInTheDocument();

      expect(screen.getByTestId("male-icon")).toBeInTheDocument();
    });

    it("should handle a single name correctly", () => {
      render(<Avatar name="Zoro" fallback="initials" />);
      expect(screen.getByText("Z")).toBeInTheDocument();
    });

    it("should handle multiple spaces between names", () => {
      render(<Avatar name="First      Last" fallback="initials" />);
      expect(screen.getByText("FL")).toBeInTheDocument();
    });
  });

  describe("Lifecycle & Error Handling", () => {
    it("should reset error state when src prop changes", () => {
      const { rerender, container } = render(
        <Avatar src="broken.jpg" name="Test User" fallback="initials" />,
      );
      const img = container.querySelector("img")!;

      fireEvent.error(img);

      expect(container.querySelector("img")).not.toBeInTheDocument();
      expect(screen.getByText("TU")).toBeInTheDocument();

      rerender(
        <Avatar src="new-valid.jpg" name="Test User" fallback="initials" />,
      );

      const newImg = container.querySelector("img");
      expect(newImg).toHaveAttribute("src", "new-valid.jpg");
    });
  });

  describe("Accessibility", () => {
    it("should use an empty alt string and hide role when name/alt are missing", () => {
      const { container } = render(<Avatar src="valid.jpg" />);
      const img = container.querySelector("img");

      expect(img).toHaveAttribute("alt", "");
      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
  });

  describe("Core Functionality", () => {
    it("should apply size variants correctly via CVA", () => {
      render(<Avatar size="small" data-testid="avatar-root" />);
      expect(screen.getByTestId("avatar-root")).toHaveClass("h-8", "w-8");
    });

    it("should render the correct gender icon", () => {
      render(<Avatar gender="female" />);
      expect(screen.getByTestId("female-icon")).toBeInTheDocument();
    });
  });
});
