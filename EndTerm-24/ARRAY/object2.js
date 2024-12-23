const salary = [
    {
      name:'John',
      payable:{
        base:32500,
        hra:1200,
        da:20050
      },
      deduction:{
        pf:1800,
        tds:1200
      }
    },
    {
      name:'Annie',
      payable:{
        base:33500,
        hra:1800,
        da:25050
      },
      deduction:{
        pf:2200,
        tds:3200
      }
    }
  ]
 function empSalary(salary){
   return  salary.map(obj=>{
    let pay=obj.payable.base+obj.payable.hra+obj.payable.da;
    let dedu=obj.deduction.pf+obj.deduction.tds;
    let salary=pay-dedu;
    return `The Salary of ${obj.name} is ${salary}`;
    })
 }

  console.log(empSalary(salary));