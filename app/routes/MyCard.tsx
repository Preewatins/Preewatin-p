import { useState } from "react";
import { cards } from "./data";

function IsMember({ act }: { act: boolean }) {
  if (act)
    return <span>✅ Hi,VIP Member</span>
  else
    return <span>❌ Hi,Member Only</span>
}

function Profile({ id, nam, bio, bgp, imgu, usrn, cdat, act }
  : { id: number, nam: string, bio: any, bgp: string, imgu: string, usrn: string, cdat: string, act: boolean }
) {
  return (
    <div key={(id)} className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${bgp})` }} title="Pree">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
            Members only */}
            <IsMember
              act={act}
            />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
          <p className="text-gray-700 text-base">{bio}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={imgu} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyCard() {
  const [active, setActive] = useState(true);

  // let / var / cont 
  const name = "Preewatin Prateepchamcharas";
  const note = "#webprogramming";
  const note2 = "web"
  const chk = true;

  const items = cards.filter(cardItem =>
    cardItem.active === active
  );
  const cardItems = items.map(cardItem =>
    <Profile
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
    alert("handleClickActive" + active);

  }
  function handleClickNonAct() {
    setActive(false);
    alert("handleClickNonAct" + active);

  }

  return (
    <>
      <div className="m-3 bg-sky-200 p-10">

        <h1 className="text-3xl">My Card : {name}</h1></div>
      

      <div className="basis-1/4 m-2 p-3 bg-green-300 rounded-3xl text-red-700 font-bold">{note}</div>
      <div className="basis-1/2 m-2 p-3 bg-green-300 rounded-3xl text-orange-700 fount-bold">{note2}

        <hr />
        {/* <Profiles /> */}
        {cardItems}
        <hr />
        <button className="w1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickActive}>Active</button>
        <button className="w1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
      </div>
    </>
  )

}