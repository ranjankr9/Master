package commerce.payment.processor;
import atg.core.util.StringUtils;
import atg.nucleus.GenericService;

import commerce.payment.WePayPaymentInfo;
import commerce.payment.WePayStatus;



/**
 * The Class WePayProcessorImpl authorize the payment group
 * It also integrates payu get transaction call & save payment status objects
 *
 * @author Ranjan
 */
public class WePayProcessorImpl extends GenericService implements WePayProcessor{
	
/*	*//** The TW pay u service manager. *//*
	private TWPayUServiceManager mTWPayUServiceManager;
	
	*//** The property manager. *//*
	private TWPayUPropertyManager mTwPropertyManager;*/
	
	/* (non-Javadoc)
	 * @see commerce.payment.processor.WePayProcessor#authorize(commerce.payment.WePayPaymentInfo, commerce.payment.WePayStatus)
	 */
	@Override
	public WePayStatus authorize(WePayPaymentInfo pWePayInfo, 
			WePayStatus pPaymentStatus ) {
		WePayStatus wePayStatus = pPaymentStatus ;
		if(isLoggingDebug()){
			logDebug("Start of TWPayUProcessorImpl.authorize() method");
		}
		String refrenceId = null;
		if(StringUtils.isNotBlank(pWePayInfo.getPayUReference())){
			refrenceId = pWePayInfo.getPayUReference();
		}else{
			refrenceId =pWePayInfo.getMerchantRef();
		}
		
		/*TWPayUGetTransactionResponseModel response = getTWPayUServiceManager().callGetTransactionServiceAtPayU(refrenceId);
		OrderStates orderStates = StateDefinitions.ORDERSTATES;
		if(response == null || TWCheckoutConstants.PAYMENT_STATUS_PROCESSING.equalsIgnoreCase(response.getGetTransacationResponseMessage().getTransactionState())){
			// populare default payment payment status in case of PROCESSING
			populateDefaultPayUPaymentStatus(twPayUStatus, pPayUInfo);
			pPayUInfo.getOrder().setState(orderStates.getStateValue(TWCheckoutConstants.PENDING_PAYMENT_CONFIRMATION_STATUS));
			return twPayUStatus;
		}
		
		Map<String,String> basketMap=((TWPayUPayment)pPayUInfo.getPaymentGroup()).getBasketDetails();
		boolean mapNeedToSave = false;
		if(null==basketMap){
			basketMap= new HashMap<String, String>();
			mapNeedToSave=true;
		}
		basketMap.put(getTwPropertyManager().getAmountInCents(),response.getGetTransacationResponseMessage().getBasket().getAmountInCents());
		basketMap.put(getTwPropertyManager().getCurrencyCode(),response.getGetTransacationResponseMessage().getBasket().getCurrencyCode());
		basketMap.put(getTwPropertyManager().getBasketDesc(),response.getGetTransacationResponseMessage().getBasket().getDescription());
		if(mapNeedToSave){
			((TWPayUPayment)pPayUInfo.getPaymentGroup()).setBasketDetails(basketMap);
			mapNeedToSave=false;
		}
		Map<String,String> payMethodUsedMap=((TWPayUPayment)pPayUInfo.getPaymentGroup()).getPaymentMethodUsed();
		TWPayUIPaymentMethod tWPayUIPaymentMethod =(TWPayUIPaymentMethod)response.getGetTransacationResponseMessage().getPaymentMethodsUsed();
		if(null==payMethodUsedMap){
			payMethodUsedMap= new HashMap<String, String>();
			mapNeedToSave=true;
		}
		payMethodUsedMap.put(getTwPropertyManager().getAmountInCents(),tWPayUIPaymentMethod.getAmountInCents());
		payMethodUsedMap.put(getTwPropertyManager().getCardExpiry(),tWPayUIPaymentMethod.getCardExpiry());
		payMethodUsedMap.put(getTwPropertyManager().getCardNumber(),tWPayUIPaymentMethod.getCardNumber());
		payMethodUsedMap.put(getTwPropertyManager().getGatewayReference(),tWPayUIPaymentMethod.getGatewayReference());
		payMethodUsedMap.put(getTwPropertyManager().getInformation(),tWPayUIPaymentMethod.getInformation());
		payMethodUsedMap.put(getTwPropertyManager().getNameOnCard(),tWPayUIPaymentMethod.getNameOnCard());
		if(mapNeedToSave){
			((TWPayUPayment)pPayUInfo.getPaymentGroup()).setPaymentMethodUsed(payMethodUsedMap);
		}
		twPayUStatus=populatePayUPaymentStatus(twPayUStatus,response, pPayUInfo);
		if(isLoggingDebug()){
			logDebug("End of TWPayUProcessorImpl.authorize() method");
		}*/
		return wePayStatus;
		
	}
	
	
	/**
	 * Populate pay u payment status.
	 *
	 * @param pPaymentStatus the payment status
	 * @param pResponse the pResponse
	 * @param pPayUInfo the pay u info
	 * @return the TW pay u status
	 *//*
	private WePayStatus populatePayUPaymentStatus(WePayStatus pPaymentStatus, 
			TWPayUGetTransactionResponseModel pResponse, WePayPaymentInfo pPayUInfo){
		if(isLoggingDebug()){
			logDebug("Start of TWPayUProcessorImpl.populatePayUPaymentStatus() method");
		}
		pPaymentStatus.setTransactionType(pResponse.getGetTransacationResponseMessage().getTransactionType());
		pPaymentStatus.setTransactionId(pPayUInfo.getOrderId());
		pPaymentStatus.setAmountInCents(pResponse.getGetTransacationResponseMessage().getBasket().getAmountInCents());
		pPaymentStatus.setAmount(pPayUInfo.getAmount());
		pPaymentStatus.setTransactionSuccess(pResponse.getGetTransacationResponseMessage().isSuccessful());
		pPaymentStatus.setTransactionTimestamp(new Date());
		pPaymentStatus.setTransactionState(pResponse.getGetTransacationResponseMessage().getTransactionState());
		pPaymentStatus.setPaymentStatus(pResponse.getGetTransacationResponseMessage().getTransactionState());
		pPaymentStatus.setResultCode(pResponse.getGetTransacationResponseMessage().getResultCode());
		pPaymentStatus.setResultMessage(pResponse.getGetTransacationResponseMessage().getResultMessage());
		pPaymentStatus.setPointOfFailure(pResponse.getGetTransacationResponseMessage().getPointOfFailure());
		if(isLoggingDebug()){
			logDebug("End of TWPayUProcessorImpl.populatePayUPaymentStatus() method");
		}
		return pPaymentStatus;
		
	}
	*/
	/**
	 * Populate pay u payment status.
	 *
	 * @param pPaymentStatus the payment status
	 * @param pPayUInfo the pay u info
	 * @return the TW pay u status
	 *//*
	private TWPayUStatus populateDefaultPayUPaymentStatus(TWPayUStatus pPaymentStatus, TWPayUPaymentInfo pPayUInfo){
		if(isLoggingDebug()){
			logDebug("Start of TWPayUProcessorImpl.populateDefaultPayUPaymentStatus() method");
		}
		pPaymentStatus.setTransactionSuccess(Boolean.TRUE);
		pPaymentStatus.setTransactionId(pPayUInfo.getOrderId());
		pPaymentStatus.setAmountInCents(String.valueOf(TWCheckoutConstants.PAYMENT_ZERO_AMOUNT));
		pPaymentStatus.setAmount(TWCheckoutConstants.PAYMENT_ZERO_AMOUNT);
		pPaymentStatus.setTransactionTimestamp(new Date());
		pPaymentStatus.setTransactionState(TWCheckoutConstants.PAYMENT_STATUS_PROCESSING);
		pPaymentStatus.setPaymentStatus(TWCheckoutConstants.PAYMENT_STATUS_PROCESSING);
		if(isLoggingDebug()){
			logDebug("End of TWPayUProcessorImpl.populateDefaultPayUPaymentStatus() method");
		}
		return pPaymentStatus;
		
	}*/


	/**
	 * @return the tWPayUServiceManager
	 *//*
	public TWPayUServiceManager getTWPayUServiceManager() {
		return mTWPayUServiceManager;
	}

	*//**
	 * @param pTWPayUServiceManager the tWPayUServiceManager to set
	 *//*
	public void setTWPayUServiceManager(TWPayUServiceManager pTWPayUServiceManager) {
		mTWPayUServiceManager = pTWPayUServiceManager;
	}


	*//**
	 * @return the twPropertyManager
	 *//*
	public TWPayUPropertyManager getTwPropertyManager() {
		return mTwPropertyManager;
	}


	*//**
	 * @param pTwPropertyManager the twPropertyManager to set
	 *//*
	public void setTwPropertyManager(TWPayUPropertyManager pTwPropertyManager) {
		mTwPropertyManager = pTwPropertyManager;
	}

*/


}
