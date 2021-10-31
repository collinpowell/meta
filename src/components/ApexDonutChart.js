import Chart from 'react-apexcharts'
//import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexRadiarChart = () => {
  const donutColors = {
    series1: '#0fa700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
    series6: '#0f00b9',
  }
  const options = {
    legend: {
      show: true,
      position: 'bottom'
    },
    labels: ['Presale', 'Pool', 'Rewards', 'Developments','Airdrop','Team'],

    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2,donutColors.series4,donutColors.series6],
    dataLabels: {
      enabled: true,
      formatter(val, opt) {
        return `${parseInt(val)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
            },
            value: {
              fontSize: '1rem',
              formatter(val) {
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Presale',
              formatter(w) {
                return '50%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  const series = [50, 30, 10, 5,3,2]

  return (
    <>
    {/*<Card>
      <CardHeader>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Expense Ratio
          </CardTitle>
          <CardSubtitle className='text-muted'>Spending on various categories</CardSubtitle>
        </div>
      </CardHeader>
    <CardBody>*/}
        <Chart options={options} series={series} type='donut' height={350} />
      {/* </CardBody>
    </Card> */}</>
  )
}

export default ApexRadiarChart
