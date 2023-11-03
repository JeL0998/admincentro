// Stops.js
import React, { useState, useCallback } from 'react';
import MapComponent from '../components/MapComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Stops() {
  const [savedCoordinates, setSavedCoordinates] = useState([]);

  const deleteCoordinate = (index) => {
    const updatedCoordinates = [...savedCoordinates];
    updatedCoordinates.splice(index, 1);
    setSavedCoordinates(updatedCoordinates);
  };

  const saveCoordinate = useCallback((coordinate) => {
    setSavedCoordinates((prevCoordinates) => [...prevCoordinates, coordinate]);
  }, [setSavedCoordinates]);

  return (
    <div className="p-4 h-full">
      <div className="flex flex-grow h-full">
        <div className="w-7/12 h-auto">
          <MapComponent
            savedCoordinates={savedCoordinates}
            onSaveCoordinate={saveCoordinate}
          />
        </div>
        <div className="w-5/12 ml-4">
          <h2 className="text-2xl font-semibold mb-4">Stops Coordinates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-3 text-center">Name</th>
                  <th className="py-2 px-3 text-center">Latitude</th>
                  <th className="py-2 px-3 text-center">Longitude</th>
                  <th className="py-2 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {savedCoordinates.map((coordinate, index) => (
                  <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-3 text-center">{coordinate.name}</td>
                    <td className="py-2 px-3 text-center">{coordinate.lat}</td>
                    <td className="py-2 px-3 text-center">{coordinate.lng}</td>
                    <td className="py-2 px-3 text-center">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteCoordinate(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
