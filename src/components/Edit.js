import React, { useState } from 'react';
import marks from './Marks';

export default function Edit() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [newPages, setNewPages] = useState('');

  const handleSelection = (event) => {
    const selectedOption = event.target.value;
    setSelectedSubject(selectedOption);
    alert('Selected item subject: ' + selectedOption);
  };

  const getPreviouspage = (subject) => {
    const selectedPages = marks.find((item) => item.subject === subject);
    return selectedPages ? selectedPages.pages : '';
  };

  const handleSave = () => {
    const updatedPages = marks.map((item) => {
      if (item.subject === selectedSubject) {
        console.log("the if"+item.subject)
        item.pages=newPages
        return { ...item, pages: newPages };
      }
      return item;
      console.log("the item is"+item);
    });

    // Here, you can perform further actions with the updated marks array, like saving to a database or updating state.
    console.log(updatedPages);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Select the subject</th>
            <th>Previous score</th>
            <th>New Score</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select onChange={handleSelection}>
                <option value="">Select an option</option>
                {marks.map((item) => (
                  <option key={item.subject} value={item.subject}>
                  {item.subject}
                  </option>
                ))}
              </select>
            </td>
            <td>{getPreviouspage(selectedSubject)}</td>
            <td>
              <input
                type="text"
                className="newscore"
                value={newPages}
                onChange={(e) => setNewPages(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleSave}>Save</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>Selected item subject: {selectedSubject}</p>
    </div>
  );
}