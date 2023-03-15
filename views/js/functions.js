/**
* 2007-2023 Conekta
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author Conekta <support@conekta.io>
*  @copyright  2012-2022 Conekta
*  @version  v2.0.0
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

function manageInstallments() {
    let select = $("#PAYMENT_MONTHS_INSTALLMENT")
    let elements = $(".checkbox > label[for^='INSTALLMENTS_'][for$='_MONTHS']").parent().parent().parent()

    if (select.val() === 'YES') {
        elements.removeClass("hidden")
    } else {
        elements.addClass("hidden")
    }
}

function showInstalmentsOptions() {

    const paymentCard = $("#PAYMENT_METHS_CARD");
    const selectMonthInstallments = $("#PAYMENT_MONTHS_INSTALLMENT")


    if (paymentCard.is(':checked')) {
        selectMonthInstallments.parent().parent().removeClass('hidden')
    }

    if (!paymentCard.is(':checked')) {
        selectMonthInstallments.parent().parent().addClass('hidden')
        selectMonthInstallments.val('NO')
    }
    manageInstallments()
}


$(document).ready(function () {
    //initial state
    let paymentCash = $("#PAYMENT_METHS_CASH");
    let expirationDateLimit = $("#EXPIRATION_DATE_LIMIT")
    let paymentCashChecked = paymentCash.is(":checked")

    $("#EXPIRATION_DATE_TYPE_DAYS").prop("disabled", !paymentCashChecked);
    $("#EXPIRATION_DATE_TYPE_HOURS").prop("disabled", !paymentCashChecked);
    expirationDateLimit.prop("disabled", !paymentCashChecked);
    showInstalmentsOptions()
    $("#PAYMENT_MONTHS_INSTALLMENT").change(manageInstallments);
    $("#PAYMENT_METHS_CARD").change(showInstalmentsOptions)

    //onchange value
    paymentCash.change(function () {
        $("#EXPIRATION_DATE_TYPE_DAYS").prop("disabled", !this.checked);
        $("#EXPIRATION_DATE_TYPE_HOURS").prop("disabled", !this.checked);
        expirationDateLimit.prop("disabled", !this.checked);
        expirationDateLimit.prop("required", this.checked);
    });

});
