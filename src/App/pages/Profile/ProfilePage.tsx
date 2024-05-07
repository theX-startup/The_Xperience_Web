import { IoLocation } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OwnedInternships from "./userInternship/owned-internship";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfo from "./components/Personal-info";
import { user } from "@/redux/models";

const ProfilePage = () => {
  const user : user = useSelector((state: any) => state.auth.user);
  const params = useParams();
  const { userId } = params;
  const ownProfile = userId === user._id;
  const { path } = useParams();


  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");



  return (
    <div className="min-h-[80vh] ">
      <div className="md:p-5 flex md:gap-5 gap-2 items-center text_sm">
        <div className="rounded-md relative">
          {user.picturePath ? (
            <img
              src={ user.picturePath}
              alt=""
              className="rounded-md w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            />
          ) : (
            <div className="w-[80px] bg-black h-[80px] rounded-md text-white justify-center items-center flex md:w-[100px] md:h-[100px]">
              <h1 className="uppercase text_md">{initials}</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="uppercase">{user.fullname}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <h1>{user.email}</h1>
          <div className="flex items-center gap-1">
            <IoLocation size={20} />
            <h1>{user.country}</h1>
          </div>
        </div>
      </div>
      <Tabs defaultValue={path} className="w-full mt-5">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="internships">Internships</TabsTrigger>
          <TabsTrigger value="personal-info">Profile Information</TabsTrigger>
        </TabsList>
        <TabsContent value="internships">
          <OwnedInternships ownedProfile={ownProfile} />
        </TabsContent>
        <TabsContent value="personal-info">
          <PersonalInfo user={user} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
