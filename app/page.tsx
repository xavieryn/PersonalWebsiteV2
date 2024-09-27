"use client"

import Introduction from "../components/Introduction";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";

import React, { useEffect, useState } from "react";
import cong from "../configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, onValue } from "firebase/database";
interface SectionData {
  id: string;
  sections: object;  // Replace `any` with a more specific type if you know the structure of your sections
}

export default function Home() {

  const [data, setData] = useState<SectionData[]>([]);
  //console.log("This is the data: ", data)
  console.log(data);
  const [loading, setLoading] = useState(true); // Add a loading state


  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(cong);
    
    // Reference to the specific collection in the database
    const collectionRef = ref(database, "/");

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        //console.log(dataItem)

        // Check if dataItem exists
        if (dataItem) {
          console.log(dataItem[1]['Education'])

          // Convert the object values into an array
          const displayItems = Object.keys(dataItem[1]).map((key) => ({
            id: key,
            sections: dataItem[1][key]
          }));
          console.log("Display Items", displayItems)
          setData(displayItems);
          setLoading(false); // Set loading to false when data is fetched
        }
      });
    };


    // Fetch data when the component mounts
    fetchData();
  }, []);
  return (


    <div className=" flex min-h-full sm:w-full lg:flex-row flex-col  font-[family-name:var(--font-geist-sans)]  sm:p-20 lg:p-0 overflow-hidden">

      {/* First section: Introduction (Left side on PC) */}
      <div className="lg:fixed lg:w-1/2 flex-col w-full items-center justify-center text-center h-screen transform -translate-y-10 m-auto">
        <Introduction/>
      </div>

      {/* Second section: About Me, Work, etc (Right side on PC) */}
      <div className="lg:w-1/2 lg:ml-[50%] w-full flex flex-col items-center lg:pl-20 lg:pr-20 pl-10 pr-10">
        {loading ? (
          <p>Loading...</p> // Show a loading state while fetching data
            ) : (
          <div>
            <AboutMe />
            { <Work work={data[2].sections} />  }
            { <Projects projects = {data[1].sections}/> }
            { <Education education = {data[0].sections}/> }
        
          </div>
          )}
      </div>
      
    </div>
  );
}
