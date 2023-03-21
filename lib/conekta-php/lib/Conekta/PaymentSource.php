<?php
/**
 * NOTICE OF LICENSE
 * Title   : Conekta Card Payment Gateway for Prestashop
 * Author  : Conekta.io
 * URL     : https://www.conekta.io/es/docs/plugins/prestashop.
 * PHP Version 7.0.0
 * Conekta File Doc Comment
 *
 * @author    Conekta <support@conekta.io>
 * @copyright 2012-2023 Conekta
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *
 * @category  Conekta
 *
 * @version   GIT: @2.3.6@
 *
 * @see       https://conekta.com/
 */

namespace Conekta;

class PaymentSource extends ConektaResource
{
    public const TYPE_CARD = 'card';

    public const TYPE_OXXO_RECURRENT = 'oxxo_recurrent';

    public function instanceUrl()
    {
        $this->apiVersion = Conekta::$apiVersion;
        $id = $this->id;
        parent::idValidator($id);
        $class = get_class($this);
        $base = '/payment_sources';
        $extn = urlencode($id);
        $customerUrl = $this->customer->instanceUrl();

        return $customerUrl . $base . "/{$extn}";
    }

    public function update($params = null)
    {
        return parent::_update($params);
    }

    public function delete()
    {
        return parent::_delete('customer', 'payment_sources');
    }

    /**
     * Method for determine if is card
     *
     * @return bool
     */
    public function isCard()
    {
        return $this['type'] == self::TYPE_CARD;
    }

    /**
     * Method for determine if is oxxo recurrent
     *
     * @return bool
     */
    public function isOxxoRecurrent()
    {
        return $this['type'] == self::TYPE_OXXO_RECURRENT;
    }
}
