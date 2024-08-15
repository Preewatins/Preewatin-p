import { useParams } from 'react-router-dom';
import { cards } from './data'; // Import profile data

export default function ProfileView() {
  const { id } = useParams<{ id: string }>();
  
  // Ensure id is defined and convert it to a number
  if (!id) return <div>Profile not found</div>;

  const profileId = Number(id);
  
  // Ensure profileId is valid and find the profile
  const profile = cards.find(card => card.id === profileId);

  // Check if profile exists
  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile Details</h1>
      <div className="flex items-center">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${profile.bgProf})` }}
          title={profile.name}
        />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {profile.active ? <span>✅ Hi, VIP Member</span> : <span>❌ Hi, Member Only</span>}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{profile.name}</div>
            <p className="text-gray-700 text-base">{profile.biog}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={profile.userIcon} alt="User Icon" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{profile.userName}</p>
              <p className="text-gray-600">{profile.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}