import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cards } from './data'; // นำเข้าข้อมูลโปรไฟล์

function IsMember({ act }: { act: boolean }) {
  return act ? <span>✅ Hi, VIP Member</span> : <span>❌ Hi, Member Only</span>;
}

function Profile({ id, nam, bio, bgp, imgu, usrn, cdat, act }: 
  { id: number, nam: string, bio: any, bgp: string, imgu: string, usrn: string, cdat: string, act: boolean }
) {
  const navigate = useNavigate();

  return (
    <div key={id} className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgp})` }}
        title="Profile Picture"
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <IsMember act={act} />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
          <p className="text-gray-700 text-base">{bio}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={imgu} alt="User Icon" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/card/${id}`)} // Navigate to ProfileView
        >
          View
        </button>
      </div>
    </div>
  );
}

export default function MyCard() {
  const [active, setActive] = useState(true);

  const name = "Preewatin Prateepchamcharas";
  const note = "#webprogramming";
  const note2 = "web";

  const items = cards.filter(cardItem => cardItem.active === active);
  const cardItems = items.map(cardItem =>
    <Profile
      key={cardItem.id}
      id={cardItem.id}
      nam={cardItem.name}
      bio={cardItem.biog}
      bgp={cardItem.bgProf}
      imgu={cardItem.userIcon}
      usrn={cardItem.userName}
      cdat={cardItem.createdAt}
      act={cardItem.active}
    />
  );

  function handleClickActive() {
    setActive(true);
    alert("Showing active profiles");
  }
  
  function handleClickNonAct() {
    setActive(false);
    alert("Showing non-active profiles");
  }

  return (
    <>
      <div className="m-3 bg-sky-200 p-10">
        <h1 className="text-3xl">My Card: {name}</h1>
      </div>
      <div className="basis-1/4 m-2 p-3 bg-green-300 rounded-3xl text-red-700 font-bold">{note}</div>
      <div className="basis-1/2 m-2 p-3 bg-green-300 rounded-3xl text-orange-700 font-bold">{note2}</div>
      <hr />
      {cardItems}
      <hr />
      <button className="w-1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickActive}>Active</button>
      <button className="w-1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
    </>
  );
}