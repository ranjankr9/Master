
package commerce.payment.processor;

import commerce.payment.WePayPaymentInfo;
import commerce.payment.WePayStatus;

/**
 * @author ranjan
 *
 */
public interface WePayProcessor {
	/**
	 * Authorize the amount in WePay Payment Group.
	 *
	 * @param pWePayInfo the GameSaverInfo reference which contains
	 *        all the authorization data
	 * @param pPaymentStatus of type WePayStatus
	 * @return paymentStatus WePayStatus
	 */

	WePayStatus authorize(WePayPaymentInfo pWePayInfo, WePayStatus pPaymentStatus);
}
