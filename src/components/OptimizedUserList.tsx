import React, { memo } from "react";
import { useUsers } from "../hooks/useUsers";

// React.memo를 사용하여 불필요한 리렌더링 방지
// props가 변경되지 않으면 다시 렌더링하지 않음
const FullName = memo(
  ({ firstName, lastName }: { firstName: string; lastName: string }) => (
    <div className="full-name">
      {/* 이름을 쪼개지 않고 한 번에 렌더링 */}
      {firstName} {lastName}
    </div>
  )
);

// 사용자 카드 컴포넌트도 memo로 최적화
// 각 사용자의 정보가 변경될 때만 리렌더링
const UserCard = memo(
  ({
    firstName,
    lastName,
    email,
  }: {
    firstName: string;
    lastName: string;
    email: string;
  }) => (
    <div className="user-card">
      {/* 컴포넌트를 논리적인 단위로 분리 */}
      <FullName firstName={firstName} lastName={lastName} />
      <div className="email">{email}</div>
    </div>
  )
);

export const OptimizedUserList: React.FC = () => {
  const { users, generateUsers } = useUsers();

  return (
    <div className="user-list">
      <button onClick={() => generateUsers(100)}>100명의 사용자 생성</button>
      <div className="users-container">
        {/* 
          각 사용자마다 최적화된 UserCard 컴포넌트 사용
          key prop으로 고유한 id 사용 (index 사용 지양)
        */}
        {users.map((user) => (
          <UserCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};
