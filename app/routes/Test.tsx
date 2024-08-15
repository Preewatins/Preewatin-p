import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    const handleViewClick = (card) => {
        // นำทางไปหน้า Test1 พร้อมส่งข้อมูล id, name, และ note ผ่านพารามิเตอร์ใน URL
        navigate(`/test1/${card.id}/${card.name}/${card.note}`);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-semibold mb-4 bg-green-300 p-3 rounded-lg shadow-md">ข้อมูลนามบัตร</h1>
            <div className="w-full max-w-md mt-6">
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200 text-left">
                        <tr>
                            <th className="p-3 border-b text-gray-700">No.</th>
                            <th className="p-3 border-b text-gray-700">Data1</th>
                            <th className="p-3 border-b text-gray-700">Data2</th>
                            <th className="p-3 border-b text-gray-700">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 4 }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="p-3 border-b text-gray-600 text-center">{rowIndex + 1}</td>
                                <td className="p-3 border-b text-gray-600 text-center">-</td>
                                <td className="p-3 border-b text-gray-600 text-center">-</td>
                                <td className="p-3 border-b text-gray-600 text-center">
                                    <button
                                        onClick={() => handleViewClick({ id: rowIndex + 1, name: 'test1', note: 'test1' })}
                                        className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}