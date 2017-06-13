package commerce.payment;

import atg.commerce.payment.PaymentManager;

import commerce.payment.processor.WePayProcessor;

/**
 * 
 * @author Ranjan
 *
 */
public class WePaymentManager extends PaymentManager {
	
	/** The Pay u processor. */
	private WePayProcessor mWePayProcessor;

	/**
	 * @return the mWePayProcessor
	 */
	public WePayProcessor getWePayProcessor() {
		return mWePayProcessor;
	}

	/**
	 * @param mWePayProcessor the mWePayProcessor to set
	 */
	public void setWePayProcessor(WePayProcessor mWePayProcessor) {
		this.mWePayProcessor = mWePayProcessor;
	}

	/**
	 * This method has been overridden to set the order of payment t if multiple payments
	 * exist in the order. This is required if order contains credit card and gift card payments
	 * first gift card then credit card should be authorized.
	 * 
	 * @param pOrder - the order
	 * @param pPaymentGroups - the list of payment groups in order
	 * @throws CommerceException - if any CommerceException exists
	 * @return list - the list of payment groups
	 *//*	
	@Override
	public List authorize(Order pOrder, List pPaymentGroups)
			throws CommerceException {
    	if (isLoggingDebug()) {
    		logDebug("TWPaymentManager.authorize() method.STARTS");
    		vlogDebug("TWPaymentManager.authorize() method , pOrder:{0} pPaymentGroups:{1}", pOrder, pPaymentGroups);
    	}
    	if (pPaymentGroups == null) {
    		throw new InvalidParameterException(TWCheckoutConstants.INVALID_PAYMENT_GROUP);
    	}
    	String paymentGroupId = null;
    	List<String> failedGroups = new ArrayList<String>(pPaymentGroups.size());
    	List<PaymentGroup> orderedPaymentGroups = pOrder.getPaymentGroups();

    	try {
    		for (PaymentGroup paymentGroup : orderedPaymentGroups) {
    			if (isLoggingDebug()) {
    				vlogDebug("TWPaymentManager.authorize() method , paymentGroup:{0}", paymentGroup);
    			}
    			paymentGroupId = paymentGroup.getId();
    			if (pOrder != null && paymentGroup.getAmount() > TWCheckoutConstants.PAYMENT_ZERO_AMOUNT) {
    				authorize(pOrder, paymentGroup);
    				PaymentStatus lastPaymentStatus = getLastAuthorizationStatus(paymentGroup);
    				if(!lastPaymentStatus.getTransactionSuccess() && !StringUtils.isBlank(lastPaymentStatus.getErrorMessage())){
    					failedGroups.add(paymentGroup.getId());
    					break;
    				}
    			}
    		}
    	} catch (CommerceException commerceException) {
    		failedGroups.add(paymentGroupId);
    		if (isLoggingDebug()) {
    			logDebug("CommerceException for the payment id - " + paymentGroupId + ", " + commerceException.getMessage());
    		}
    		if (isLoggingError()) {
				logError("CommerceException" , commerceException);
			}
    	}
    	if (isLoggingDebug()) {
    		vlogDebug("TWPaymentManager.authorize() method , failedGroups:{0} ", failedGroups);
    		logDebug("TWPaymentManager.authorize() method.END");
    	}
    	return failedGroups;
	}
	
	*//**
	 * @param pPaymentGroup - the PaymentGroup
	 * @param pStatus - the PaymentStatus
	 *  * @param pAmount - the double
	 * @throws CommerceException - if any CommerceException exists
	 *//*	
	@Override
	protected void postProcessAuthorize(PaymentGroup pPaymentGroup, PaymentStatus pStatus, double pAmount)
		    throws CommerceException
	{	
		if (isLoggingDebug()) {
				logDebug("TWPaymentManager.postProcessAuthorize() method.START");
		}
		super.postProcessAuthorize(pPaymentGroup, pStatus, pAmount);
	    if(TWCheckoutConstants.PAYMENT_ZERO_AMOUNT == pStatus.getAmount()){
	    	 pPaymentGroup.setAmountAuthorized(TWCheckoutConstants.PAYMENT_ZERO_AMOUNT);
	    }
		if (isLoggingDebug()) {
				logDebug("TWPaymentManager.postProcessAuthorize() method.END");
		}
	 }*/

}
