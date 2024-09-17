import { educationList } from '@/database/educationList'
import Education from './Education'


export default function Educations() {
  return (
    <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {educationList?.map((education) => (
        <Education key={education?.id} education={education} />
      ))}
    </div>
  )
}
