
package commerce.payment;


import atg.payment.PaymentStatusImpl;


/**
 * Author: Professional Access 
 */
public class WePayStatus extends PaymentStatusImpl {
	
	
	/**
	 * This property hold serialVersionUid
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * This property hold transactionType
	 */
	private String mTransactionType;
	
	/**
	 * This property hold transactionState
	 */
	private String mTransactionState;
	
	/**
	 * This property hold paymentStatus
	 */
	private String mPaymentStatus;
	
	/**
	 * This property hold resultCode
	 */
	private String mResultCode;
	
	/**
	 * This property hold resultMessage
	 */
	private String mResultMessage;
	
	/**
	 * This property hold pointOfFailure
	 */
	private String mPointOfFailure;
	
	/**
	 * This property hold amountInCents
	 */
	private String mAmountInCents;

	/**
	 * @return the transactionType
	 */
	public String getTransactionType() {
		return mTransactionType;
	}

	/**
	 * @param pTransactionType the transactionType to set
	 */
	public void setTransactionType(String pTransactionType) {
		mTransactionType = pTransactionType;
	}

	/**
	 * @return the transactionState
	 */
	public String getTransactionState() {
		return mTransactionState;
	}

	/**
	 * @param pTransactionState the transactionState to set
	 */
	public void setTransactionState(String pTransactionState) {
		mTransactionState = pTransactionState;
	}

	/**
	 * @return the paymentStatus
	 */
	public String getPaymentStatus() {
		return mPaymentStatus;
	}

	/**
	 * @param pPaymentStatus the paymentStatus to set
	 */
	public void setPaymentStatus(String pPaymentStatus) {
		mPaymentStatus = pPaymentStatus;
	}

	/**
	 * @return the resultCode
	 */
	public String getResultCode() {
		return mResultCode;
	}

	/**
	 * @param pResultCode the resultCode to set
	 */
	public void setResultCode(String pResultCode) {
		mResultCode = pResultCode;
	}

	/**
	 * @return the resultMessage
	 */
	public String getResultMessage() {
		return mResultMessage;
	}

	/**
	 * @param pResultMessage the resultMessage to set
	 */
	public void setResultMessage(String pResultMessage) {
		mResultMessage = pResultMessage;
	}

	/**
	 * @return the pointOfFailure
	 */
	public String getPointOfFailure() {
		return mPointOfFailure;
	}

	/**
	 * @param pPointOfFailure the pointOfFailure to set
	 */
	public void setPointOfFailure(String pPointOfFailure) {
		mPointOfFailure = pPointOfFailure;
	}


	/**
	 * @return the amountInCents
	 */
	public String getAmountInCents() {
		return mAmountInCents;
	}

	/**
	 * @param pAmountInCents the amountInCents to set
	 */
	public void setAmountInCents(String pAmountInCents) {
		mAmountInCents = pAmountInCents;
	}

}