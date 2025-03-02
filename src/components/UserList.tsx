import React, { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";

// 비효율적인 구현 예시
// 각 문자를 개별 컴포넌트로 만들어서 렌더링하는 안 좋은 방식
const SlowCharacter: React.FC<{ char: string }> = ({ char }) => {
  useEffect(() => {
    // 일부러 성능 저하를 시뮬레이션하기 위한 인위적인 지연
    // 실제 프로젝트에서는 절대 이렇게 하면 안 됩니다!
    const start = performance.now();
    while (performance.now() - start < 1) {}
  }, [char]);

  return <span>{char}</span>;
};

// 이름을 한 글자씩 쪼개서 렌더링하는 비효율적인 컴포넌트
// 예: "John Doe" => <span>J</span><span>o</span><span>h</span><span>n</span>...
const FullName: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="full-name">
      {/* 
        문자열을 배열로 쪼개고 각 문자마다 새로운 컴포넌트를 생성
        이는 매우 비효율적인 방식입니다:
        1. 불필요한 컴포넌트 생성
        2. 과도한 메모리 사용
        3. 성능 저하
      */}
      {fullName.split("").map((char, index) => (
        <SlowCharacter key={index} char={char} />
      ))}
    </div>
  );
};

export const UserList: React.FC = () => {
  const { users, generateUsers } = useUsers();

  return (
    <div className="user-list">
      <button onClick={() => generateUsers(100)}>100명의 사용자 생성</button>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <FullName firstName={user.firstName} lastName={user.lastName} />
            <div className="email">{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
