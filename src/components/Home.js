import React,{Fragment} from 'react'
import marks from './Marks'
export default function Home() {
  return (
    <><Fragment></Fragment><div>
          <table>
   
        <tr>
        <th>
        Subject
        </th>
        <th>
        Score
        </th>
        </tr>
        
        <tbody>
{
    marks&&marks.length>0?
    marks.map((item)=>{
        return(
            <tr>
                <td>
                    {item.subject}
                </td>
                <td>
                    {item.pages}
                </td>
            </tr>
        )
    }):
    "no data available"
}
        </tbody>

          </table>
      </div></>
  )
}
