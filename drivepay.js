document.querySelector("#carType").addEventListener("change", calc);

document.querySelector("#carModel").addEventListener("change", calc);

document.querySelector("#installmentPeriod").addEventListener("change", calc);

document.querySelector("#downPayment").addEventListener("keyup", calc);


function calc() {

    var carType = document.querySelector("#carType").value;

    var carModel = document.querySelector("#carModel").value;

    var period = document.querySelector("#installmentPeriod").value;

    var downPayment = document.querySelector("#downPayment").value;


    var price = 0;

    var interest = 0;

    var loan = 0;

    var totalInterest = 0;

    var total = 0;

    var monthly = 0;


    if (carType == "" || carModel == "") {

        document.querySelector("#carPrice").value = "0 EGP";

        document.querySelector("#interestRate").value = "0%";

        document.querySelector("#monthlyInstallment").value = "0 EGP";

        document.querySelector("#totalAmount").value = "0 EGP";

    }


    else {

        if (carType == "car1") {

            if (carModel == "2023") {
                price = 1000000;
            }

            else if (carModel == "2024") {
                price = 1100000;
            }

            else if (carModel == "2025") {
                price = 1200000;
            }

            else if (carModel == "2026") {
                price = 1300000;
            }

        }


        else if (carType == "car2") {

            if (carModel == "2023") {
                price = 900000;
            }

            else if (carModel == "2024") {
                price = 1000000;
            }

            else if (carModel == "2025") {
                price = 1100000;
            }

            else if (carModel == "2026") {
                price = 1200000;
            }

        }


        else if (carType == "car3") {

            if (carModel == "2023") {
                price = 800000;
            }

            else if (carModel == "2024") {
                price = 900000;
            }

            else if (carModel == "2025") {
                price = 1000000;
            }

            else if (carModel == "2026") {
                price = 1100000;
            }

        }


        else if (carType == "car4") {

            if (carModel == "2023") {
                price = 1500000;
            }

            else if (carModel == "2024") {
                price = 1600000;
            }

            else if (carModel == "2025") {
                price = 1700000;
            }

            else if (carModel == "2026") {
                price = 1800000;
            }

        }


        document.querySelector("#carPrice").value = price + " EGP";


        if (period == "1") {

            interest = 0.10;

        }

        else if (period == "2") {

            interest = 0.15;

        }

        else if (period == "3") {

            interest = 0.20;

        }

        else if (period == "4") {

            interest = 0.25;

        }

        else if (period == "5") {

            interest = 0.30;

        }


        if (period != "" && downPayment != "") {

            loan = price - parseFloat(downPayment);

            totalInterest = loan * interest * parseInt(period);

            total = loan + totalInterest;

            monthly = total / (parseInt(period) * 12);


            document.querySelector("#interestRate").value = (interest * 100) + "%";

            document.querySelector("#totalAmount").value = total.toFixed(2) + " EGP";

            document.querySelector("#monthlyInstallment").value = monthly.toFixed(2) + " EGP";

        }

        else {

            document.querySelector("#interestRate").value = "0%";

            document.querySelector("#totalAmount").value = "0 EGP";

            document.querySelector("#monthlyInstallment").value = "0 EGP";

        }

    }

}