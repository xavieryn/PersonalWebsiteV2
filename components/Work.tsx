import Image from 'next/image'


// In Work.tsx or Work.ts
interface WorkProps {
  work: Array<{ Title: string; Description: string; sections: Object; ImageCover: string; Date: string; Skills: string }>; // work is an array of objects, each with a sections property
}

const Work: React.FC<WorkProps> = ({ work

}) => {
  //{console.log('Hi')}
  console.log(work)


  return (
    <div className="mt-4 flex flex-col w-full" >
      <div className="m-5">
        <p className="sm:text-base lg:text-xl">Experience</p>
        <hr className="h-1 mx-auto my-4 bg-[hsl(255,67%,5%)] border-1 rounded  dark:bg-white" />
      </div>

      <ul className="lg:mt-4 sm:mt-1">
        {Object.entries(work.sections).map(([key, value]) => (
          <div className="flex flex-col bg-[hsl(40, 20%, 97%)] dark:bg-[hsl(245,23%,14%)] dark:border-white  border-black border-2 w-full mx-auto max-w-full h-3/5  rounded-2xl lg:p-5 p-2 m-2">
            <li className="sm:text-xs lg:text-base" key={key}>
              <div className="flex flex-row justify-between pr-4 ">
                <h3> {value.Company}</h3> <h3>{value.Date}</h3>
              </div>
              <h1 className="lg:text-xl font-bold p-1">{value.Title}</h1>
              <h3>{value.Description}</h3>


              <Image
                src={value.ImageCover}
                width={300}
                height={200}
                alt="Cover Photo"
                className="p-2 rounded-2xl" />

              <div className="flex flex-wrap">
                {value.Skills.split(',').map((skill: string, skillIndex: number) => (
                  <span key={skillIndex} className="bg-gray-200 dark:bg-[hsl(247,59,32)] px-2 py-1 rounded m-1">
                    {skill.trim()}
                  </span>
                ))}
              </div>

            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Work;

