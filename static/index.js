const form=document.querySelector("form");
const annual=document.querySelector("#gross");
const extra=document.querySelector("#extra");
const age=document.querySelector("#age");
const deductions=document.querySelector("#deductions");
const dynamic_heading=document.querySelector(".modal-body h3");
const dynamic_footer=document.querySelector(".modal-body p");
const first_icon=document.querySelector("#firstpop");
const second_icon=document.querySelector("#secondpop");
const third_icon=document.querySelector("#thirdpop");
const firstpop=document.querySelector(".firstpop");
const secondpop=document.querySelector(".secondpop");
const thirdpop=document.querySelector(".thirdpop");
const dropdownicon=document.querySelector("#dropdownpop");
const dropdownpop=document.querySelector(".dropdownpop");

const incomeRegex = /^-?\d*\.?\d+$/;

//info icon(question mark)

const gross_icon=document.querySelector("#mark1");
const extra_icon=document.querySelector("#mark2");
const age_icon=document.querySelector("#mark3");
const spent_icon=document.querySelector("#mark4");

const gross_info=document.querySelector(".gross_info");
const extra_info=document.querySelector(".extra_info");
const age_info=document.querySelector(".age_info");
const spent_info=document.querySelector(".spent_info");


//handling info icon

gross_icon.addEventListener("mouseenter",(e)=>{

    gross_info.style.opacity=1;
});

gross_icon.addEventListener("mouseleave",(e)=>{

    gross_info.style.opacity=0;
});

extra_icon.addEventListener("mouseenter",(e)=>{

    extra_info.style.opacity=1;
});

extra_icon.addEventListener("mouseleave",(e)=>{

    extra_info.style.opacity=0;
});

age_icon.addEventListener("mouseenter",(e)=>{

    age_info.style.opacity=1;
});

age_icon.addEventListener("mouseleave",(e)=>{

    age_info.style.opacity=0;
});

spent_icon.addEventListener("mouseenter",(e)=>{

    spent_info.style.opacity=1;
});

spent_icon.addEventListener("mouseleave",(e)=>{

    spent_info.style.opacity=0;
});

//form validation as per the requirements

first_icon.addEventListener("mouseenter",(e)=>{

    firstpop.style.opacity=1;
});

first_icon.addEventListener("mouseleave",(e)=>{

    firstpop.style.opacity=0;
});

second_icon.addEventListener("mouseenter",(e)=>{

    secondpop.style.opacity=1;
});

second_icon.addEventListener("mouseleave",(e)=>{

    secondpop.style.opacity=0;
});

third_icon.addEventListener("mouseenter",(e)=>{

    thirdpop.style.opacity=1;
});

third_icon.addEventListener("mouseleave",(e)=>{

    thirdpop.style.opacity=0;
});

dropdownicon.addEventListener("mouseenter",(e)=>{

    dropdownpop.style.opacity=1;
});

dropdownicon.addEventListener("mouseleave",(e)=>{

    dropdownpop.style.opacity=0;
});

form.addEventListener("input",(e)=>{

    if(e.target.name == "gross")
    {
        if(annual.value=="")
        {
            first_icon.style.opacity=1;
            firstpop.textContent="Can not be empty!";
        }
        else
        {
            first_icon.style.opacity=0;
        }


    }

    if(e.target.name == "extra")
    {
        if(extra.value=="")
        {
            second_icon.style.opacity=1;
            secondpop.textContent="Can not be empty!";
        }
        else
        {
            second_icon.style.opacity=0;
        
        }
    }

   if(e.target.name == "deductions")
   {
        if(deductions.value=="")
        {
            third_icon.style.opacity=1;
            thirdpop.textContent="Can not be empty!";
        }
        else
        {
            third_icon.style.opacity=0;
        }
    }

   if(age.value!=="")
   {
        dropdownicon.style.opacity=0;
   }


});


form.addEventListener("change",(e)=>{

    if(e.target.name == "gross")
    {
        if(annual.value!=="" && !incomeRegex.test(annual.value))
        {
            first_icon.style.opacity=1;
            firstpop.textContent="Enter Numbers only!";
        }
        else
        {
            first_icon.style.opacity=0;
        }


    }

    if(e.target.name == "extra")
    {
        if(extra.value!=="" && !incomeRegex.test(extra.value))
        {
            second_icon.style.opacity=1;
            secondpop.textContent="Enter Numbers only!";
        }
        else
        {
            second_icon.style.opacity=0;
        }
    }

   if(e.target.name == "deductions")
   {

        if(deductions.value!=="" && !incomeRegex.test(deductions.value))
        {
            third_icon.style.opacity=1;
            thirdpop.textContent="Enter Numbers only!";
        }
        else
        {
            third_icon.style.opacity=0;
        }
   }

});


//handling form submission

form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    let check_form=false;

    //overall income(after deduction)
    
    const overall=(parseInt(annual.value) + parseInt(extra.value))-parseInt(deductions.value);
    
    if(annual.value == "")
    {
        first_icon.style.opacity=1;
        firstpop.textContent="Can not be empty!";
        check_form=true;
    }

    if(extra.value == "")
    {
        second_icon.style.opacity=1;
        secondpop.textContent="Can not be empty!";
        check_form=true;
    }

    if(deductions.value == "")
    {
        third_icon.style.opacity=1;
        thirdpop.textContent="Can not be empty!";
        check_form=true;
    }

    if(age.value == "")
    {
        dropdownicon.style.opacity=1;
        check_form=true;
    }


    if(isNaN(overall) || check_form)
    {
        dynamic_heading.textContent="No input";
        dynamic_footer.textContent="Fill the values in all the input boxes";
    }
    else
    {
        if(overall<=800000)
        {
            dynamic_heading.textContent=`Your overall income will be ${overall.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}`;
            dynamic_footer.textContent="No tax deduction";
        }
        else
        {
            if(age.value=="less than 40")
            {
                const taxed=30/100;

                const after_taxed=overall-taxed*overall;
                dynamic_heading.textContent=`Your overall income will be ${after_taxed.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}`;
                dynamic_footer.textContent="after tax deductions";
                
            }
            else if(age.value==">=40 && less than 60")
            {
                const taxed=40/100;
                const after_taxed=overall-taxed*overall;
                dynamic_heading.textContent=`Your overall income will be ${after_taxed.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}`;
                dynamic_footer.textContent="after tax deductions";
                
            }
            else
            {
                const taxed=10/100;
                const after_taxed=overall-taxed*overall;
                dynamic_heading.textContent=`Your overall income will be ${after_taxed.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}`;
                dynamic_footer.textContent="after tax deductions";
                
            }
        }

    }


    form.reset();
    
});