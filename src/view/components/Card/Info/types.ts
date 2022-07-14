export default interface InfoProps {
  status: "ready" | "error" | "transcribing";
  name: string;
  createdAt: string;
  updatedAt: string;
}
