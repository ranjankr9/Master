
package commerce.payment.processor;

import atg.commerce.claimable.InvalidParameterException;
import atg.nucleus.GenericService;
import atg.service.pipeline.PipelineProcessor;
import atg.service.pipeline.PipelineResult;

/**
 * @author Ranjan
 *
 */
public class ProcCreateWePayInfo extends GenericService implements PipelineProcessor {
	/**
	 * The possible return value for this processor is 1.
	 */
	public static final int SUCCESS = 1;

	/**
	 * The possible return value for this processor is 0.
	 */
	public static final int FAILURE = 0;
	String mWePayInfoClass;


	@Override
	public int[] getRetCodes() {
		int lRetCodes[] = {SUCCESS};
		return lRetCodes;
	}
	
	@Override
	/**
	 * This method will populate the required data to TWPayUPaymentInfo object from TWPayUPayment.
	 * 
	 * @param pParamObject the paramObject to set
	 * @param pParamPipelineResult the paramPipelineResult
	 * @return success or failure
	 * @throws InstantiationException 	-InstantiationException
	 * @throws IllegalAccessException - IllegalAccessException
	 *  @throws InvalidParameterException - InvalidParameterException
	 * @throws ClassNotFoundException - ClassNotFoundException
	 */
	public int runProcess(Object pParamObject, PipelineResult pParamPipelineResult) throws InstantiationException, IllegalAccessException, InvalidParameterException, ClassNotFoundException {
		if(isLoggingDebug()) {
			logDebug("Entering to the runprocess of the TWProcCreatePayUInfo ");
		}	
		/*PaymentManagerPipelineArgs lParams = (PaymentManagerPipelineArgs) pParamObject;
		OrderImpl order = (OrderImpl) lParams.getOrder();
		TWPayUPayment lPayU = (TWPayUPayment) lParams.getPaymentGroup();
		TWPayUPaymentInfo lPayUInfo = getPayUInfo();
		populatePayUInfo(order, lPayU, lParams, lPayUInfo);
		lParams.setPaymentInfo(lPayUInfo);*/
		return SUCCESS;
	}
	/**
	 * This method populate TWPayUPaymentInfo
	 *  
	 * @param pOrder Order
	 * @param pPayU TWPayUPayment
	 * @param pParams PaymentManagerPipelineArgs
	 * @param pPayUInfo TWPayUPaymentInfo
	 *//*
	public void populatePayUInfo(Order pOrder, TWPayUPayment pPayU,PaymentManagerPipelineArgs pParams, TWPayUPaymentInfo pPayUInfo) {
		if(pPayUInfo == null || pOrder == null || pPayU == null ){			
			if(isLoggingDebug()) {
				logDebug("order or PayUInfo or pay U payment group is null ");
			}
			return ;
		}
		List<PaymentGroup> groups = pOrder.getPaymentGroups();
		PaymentGroup pg = groups.get(0);
		pPayUInfo.setAmount(pOrder.getPriceInfo().getTotal());
		pPayUInfo.setOrder(pOrder);
		pPayUInfo.setMerchantRef(pOrder.getId());
		pPayUInfo.setPayUReference(pPayU.getPayUReference());
		pPayUInfo.setPaymentGroup(pg);
		pPayUInfo.setOrderId(pOrder.getId());
		if(isLoggingDebug()) {
			logDebug("Values in TWPayUPaymentInfo are::"+pPayUInfo);
		}
	}
	*//**
	 * This method will get new TWPayUPaymentInfo
	 *  @throws IllegalAccessException e
	 *  @throws ClassNotFoundException e
	 * @throws InstantiationException e
	 * @return TWPayUPaymentInfo
	 *//*
	public TWPayUPaymentInfo getPayUInfo() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		if(isLoggingDebug()) {
			logDebug("Making new instance of type : " + getPayUInfoClass());
		}
		TWPayUPaymentInfo payPalInfo = (TWPayUPaymentInfo) Class.forName(getPayUInfoClass()).newInstance();
		return payPalInfo;
	}

	*//**
	 * @return the payUInfoClass
	 *//*
	public String getPayUInfoClass() {
		return mPayUInfoClass;
	}

	*//**
	 * @param pPayUInfoClass the payUInfoClass to set
	 *//*
	public void setPayUInfoClass(String pPayUInfoClass) {
		mPayUInfoClass = pPayUInfoClass;
	}
*/

	/**
	 * @return the mWePayInfoClass
	 */
	public String getWePayInfoClass() {
		return mWePayInfoClass;
	}

	/**
	 * @param mWePayInfoClass the mWePayInfoClass to set
	 */
	public void setWePayInfoClass(String mWePayInfoClass) {
		this.mWePayInfoClass = mWePayInfoClass;
	}
}
