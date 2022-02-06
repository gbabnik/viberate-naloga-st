import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

export default function PopularityResponsiveBar(props) {
 
    const maxValue = 10;
    const addedChartData = props.popularityData;
    addedChartData.forEach(element => element.reversePercentage = maxValue - element.percentage);
    addedChartData.forEach(element => element.city = element.city.toUpperCase());
    // console.log(addedChartData )

    return(
    <div>
        <div style={{ height: "250px" }}>
          <ResponsiveBar 
                data={props.popularityData} 
                keys={["percentage", "reversePercentage"]} 
                indexBy="city" 
                layout="horizontal"
                reverse={false}
                // colorBy="id"
                colors={[ '#000', '#bbb' ]}
                margin={{ top: 0, right: 120, bottom: 20, left: 0 }}
                padding={0.85}
                valueScale={{ type: "linear" }}
                animate={true}
                minValue={0}
                maxValue={maxValue}
                enableLabel={false}
                axisTop={null}
                axisRight={{
                    tickSize: 5,
                    tickPadding: 1,
                    tickRotation: 0,
                }} 
                axisBottom={null}
                axisLeft={null}
                enableGridX = {false}  
                enableGridY = {true}                      
                />
        </div>
     </div>   
    
        )
    };
