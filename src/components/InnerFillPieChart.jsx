import React from 'react'
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip
);

const InnerFillPieChart = ({ percentage_value,gradient_color,bg_color, txt_class }) => {
  const data = {
    labels: ['fill','remaining'],
    datasets: [
      {
        data:[parseInt(percentage_value),100-(parseInt(percentage_value))],

        backgroundColor:(context)=>{
                if(!context.chart.chartArea) return "";
                if(context.index==0){
                    const {ctx,chartArea:{top,bottom,left,right}}=context.chart;

                    const gradientBg=ctx.createLinearGradient( right, bottom, left, top);
                    if(gradient_color.length>2){
                        gradientBg.addColorStop(0,gradient_color[0]);
                        gradientBg.addColorStop(0.1,gradient_color[1]);
                    }
                    else{
                        gradientBg.addColorStop(0,gradient_color[0]);
                        gradientBg.addColorStop(1,gradient_color[1]);
                    }
            
                    return gradientBg;
                }
                return bg_color || "#2D2D2D";
              },
        borderColor:"transparent",
        borderWidth:0,
        borderRadius:[5,0]
      },
    ],
  };
  const options = {
    plugins:{
      legend:{
        display:false
      },
      tooltip:{
        enabled:true
      }
    },
    cutout:"75%",
    elements: {
        arc: {
          borderRadius: 5
        }
      }
  };

  const centerLabel={
    id:'centerLabel',
    beforeDatasetDraw(chart,args,pluginOptions){
        const {ctx,data}=chart;

        ctx.save();
        const x=chart.getDatasetMeta(0).data[0].x;
        const y=chart.getDatasetMeta(0).data[0].y;
        ctx.font=txt_class || "normal 14px roboto";
        ctx.fillStyle="white";
        ctx.textAlign='center';
        ctx.textBaseline="middle";
        ctx.fillText(percentage_value == 0 ? "- -" : percentage_value ,x,y);
    }
  }
  return (
    <div>
      <Doughnut data={data} options={options} plugins={[centerLabel]}></Doughnut>
    </div>
  )
}

export default InnerFillPieChart