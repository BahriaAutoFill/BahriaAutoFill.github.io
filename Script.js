function injectFunction()
{
    var openTabsFunction = function openTabs()
    {
        links = document.getElementsByTagName("a");

        for (index = 0; index < links.length; index++) {
            if (links[index].innerText === "Evaluate")
            {
                let tab = window.open(links[index].getAttribute("href"));

                tab.onload = function ()
                {
                    fulltime = true;
                    disabled = false;
                    male = true;
                    ageGroup = 1;
                    collaborative = true;

                    inputs = tab.document.getElementsByTagName("input");

                    for (index = 0; index < inputs.length; index++)
                    {
                        if (tab.document.getElementById("BodyPH_surveyUserControl_lbName").innerText === "Survey: Student Course Evaluation Questionnaire (Survey Form-1)")
                        {
                            if ((inputs[index].id).slice(-12) === "_1_rbl_0_4_0")
                            {
                                inputs[index].checked = true;
                            }
                            else if (!fulltime && (inputs[index].id).slice(-12) === "11_rbl_0_0_0")
                            {
                                inputs[index].checked = true;
                            }
                            else if (fulltime && (inputs[index].id).slice(-12) === "11_rbl_0_1_0")
                            {
                                inputs[index].checked = true;
                            }
                            else if (disabled && (inputs[index].id).slice(-12) === "11_rbl_1_0_1")
                            {
                                inputs[index].checked = true;
                            }
                            else if (!disabled && (inputs[index].id).slice(-12) === "11_rbl_1_1_1")
                            {
                                inputs[index].checked = true;
                            }
                            else if (male && (inputs[index].id).slice(-12) === "11_rbl_3_0_3")
                            {
                                inputs[index].checked = true;
                            }
                            else if (!male && (inputs[index].id).slice(-12) === "11_rbl_3_1_3")
                            {
                                inputs[index].checked = true;
                            }
                            else if (ageGroup == 1 && (inputs[index].id).slice(-12) === "11_rbl_4_0_4")
                            {
                                inputs[index].checked = true;
                            }
                            else if (ageGroup == 2 && (inputs[index].id).slice(-12) === "11_rbl_4_1_4")
                            {
                                inputs[index].checked = true;
                            }
                            else if (ageGroup == 3 && (inputs[index].id).slice(-12) === "11_rbl_4_0_4")
                            {
                                inputs[index].checked = true;
                            }
                            else if (!collaborative && (inputs[index].id).slice(-12) === "11_rbl_5_0_5")
                            {
                                inputs[index].checked = true;
                            }
                            else if (collaborative && (inputs[index].id).slice(-12) === "11_rbl_5_1_5")
                            {
                                inputs[index].checked = true;
                            }
                            else if (!((inputs[index].id).slice(-12, -10) === "11" || ((inputs[index].id).slice(-12, -10) === "_1") && (inputs[index].id).slice(-1) === "0"))
                            {
                                if ((inputs[index].id).slice(-3, -2)[0] === "2")
                                {
                                    inputs[index].checked = true;
                                }
                            }
                        }
                        else if (tab.document.getElementById("BodyPH_surveyUserControl_lbName").innerText === "Survey: Teacher Evaluation Form (Survey Form-10)")
                        {
                            if ((inputs[index].id).slice(-3, -2)[0] === "2" || ((inputs[index].id).slice(-3, -2)[0] === "_" ? (inputs[index].id).slice(-4, -3)[0] === "2" : 0))
                            {
                                inputs[index].checked = true;
                            }
                        }
                    }

                    WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$BodyPH$surveyUserControl$btnSubmit", "", true, "Survey", "", false, true));
                };
            }
        }
    }

    script = document.createElement("script");
    script.innerHTML = openTabsFunction.toLocaleString() + " openTabs();";
    document.head.appendChild(script);
}

injectFunction();
