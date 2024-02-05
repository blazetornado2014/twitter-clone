import UsernameForm from "../components/Usernameform";
import useUserInfo from "@/hooks/useUserInfo";

export default function Home() {
  const {userInfo, status:userInfoStatus} = useUserInfo();
  
  if (userInfoStatus === 'loading'){
    return 'user info loading';
  }

  if (!userInfo?.username){
    return <UsernameForm/>;
  }

  return (
   <div>Homepage logged in</div>
  );
}
