package commerce.payment.processor;

import atg.commerce.CommerceException;
import atg.commerce.payment.PaymentManager;
import atg.commerce.payment.PaymentManagerPipelineArgs;
import atg.commerce.payment.processor.ProcProcessPaymentGroup;
import atg.payment.PaymentStatus;

import commerce.payment.WePayPaymentInfo;
import commerce.payment.WePayStatus;
import commerce.payment.WePaymentManager;



/**
 * @author Ranjan
 */
public class ProcProcessWePay  extends ProcProcessPaymentGroup {
	/**
	 * Holds the PaymentManager
	 */
	private PaymentManager mPaymentManager;
	
	/**
	 *This method authorize the WePay payment Group.
	 * @param pParams  reference of PaymentManagerPipelineArgs
	 * @return paymentStatus of reference PaymentStatus
	 * @throws CommerceException of CommerceException 
	 */
	@Override
	public PaymentStatus authorizePaymentGroup(PaymentManagerPipelineArgs pParams)
			throws CommerceException {
		if (isLoggingDebug()) {
			logDebug("Start of ProcProcessWePay.authorizePaymentGroup method");
		}
		WePayStatus paymentStatus= new WePayStatus(); 
		WePayPaymentInfo wePayInfo = (WePayPaymentInfo)pParams.getPaymentInfo();
		
		paymentStatus=((WePaymentManager)getPaymentManager()).getWePayProcessor().authorize(wePayInfo,paymentStatus);

		if (isLoggingDebug()) {
			logDebug("End of ProcProcessWePay.authorizePaymentGroup method");
		}
		return paymentStatus;
	}

	/**
	 * @return the paymentManager
	 */
	public PaymentManager getPaymentManager() {
		return mPaymentManager;
	}

	/**
	 * @param pPaymentManager the paymentManager to set
	 */
	public void setPaymentManager(PaymentManager pPaymentManager) {
		mPaymentManager = pPaymentManager;
	}

	/**
	 * This method is used to credit the amount to the payment group
	 * @param pArg0 -- PaymentManagerPipelineArgs
	 * @throws CommerceException -- CommerceException
	 * @return PaymentStatus -- WePay status
	 */
	@Override
	public PaymentStatus creditPaymentGroup(PaymentManagerPipelineArgs pArg0) throws CommerceException {
		return null;
	}

	/**
	 * This method is used to debit the amount to the payment group
	 * @param pArg0 -- PaymentManagerPipelineArgs
	 * @throws CommerceException -- CommerceException
	 * @return PaymentStatus -- WePay status
	 */
	@Override
	public PaymentStatus debitPaymentGroup(PaymentManagerPipelineArgs pArg0) throws CommerceException {
		return null;
	}

}
