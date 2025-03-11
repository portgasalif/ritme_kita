import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App/App";

test("renders app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Ritme Kita/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders search bar", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search for a song.../i);
  expect(searchInput).toBeInTheDocument();
});

test("renders playlist section", () => {
  render(<App />);
  const playlistInput = screen.getByPlaceholderText(/Masukan nama playlist/i);
  expect(playlistInput).toBeInTheDocument();
});

test("playlist name input updates correctly", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Masukan nama playlist/i);
  fireEvent.change(input, { target: { value: "My Test Playlist" } });
  expect(input.value).toBe("My Test Playlist");
});

test("save button is disabled when playlist is empty", () => {
  render(<App />);
  const saveButton = screen.getByText(/SAVE TO SPOTIFY/i);
  expect(saveButton).toBeDisabled();
});
