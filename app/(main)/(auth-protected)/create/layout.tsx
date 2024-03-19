interface CreateLayoutProps {
  children: React.ReactNode;
}

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <div className="flex justify-center w-full min-h-screen">{children}</div>
  );
}
