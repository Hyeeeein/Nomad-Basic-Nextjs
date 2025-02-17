import "../styles/global.css";
import Navigation from "../components/navigation";

export const metadata = {
  title: { template: "%s | next movies", default: "Loading..." },
  description: "the best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

// 레이아웃은 대체가 아닌 중첩
// 메타데이터는 레이아웃과 페이지에서만 설정 가능
