'use client';

import { useUser } from '@clerk/nextjs';

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  console.log({ user, isLoaded });

  return (
    <div className="pace-y-2 mb-4">
      <h2 className=" text-2xl lg:text-4xl text-black font-medium ">
        Welcome Back {isLoaded ? ', ' : ' '}
        {user?.username} 💸
      </h2>
      <p className=" text-sm lg:text-base text-[#247219] ">
        Welcome to SmartSpend Where We Help You Save Money
      </p>
    </div>
  );
};
