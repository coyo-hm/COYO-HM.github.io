import Link from "next/link";

export default function NotFound({}) {
  return (
    <div className={`text-center m-auto`}>
      <h1 className={`text-2xl`}>
        페이지를 찾을 수 없습니다.
        <br />
        <Link href={`/`} className={`text-blue-700`}>
          여기
        </Link>
        를 클릭해 메인으로 이동해주십시오.
      </h1>
    </div>
  );
}
