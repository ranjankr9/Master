package commerce.payment;

import atg.commerce.order.Order;
import atg.commerce.order.PaymentGroup;
import atg.nucleus.GenericService;
/** 
 * 
 * @author Ranjan
 * 
 */
public class WePayPaymentInfo extends GenericService {

	private Integer mPayURefId;
	private String mPaymentStaus;
	private double mAmount;
	private String mApi;
	private String mSafeKey;
	private String mMerchantRef;
	private String mPayUReference;
	private PaymentGroup mPaymentGroup;
	private String mOrderId;
	private Order mOrder;
	/**
	 * @return the paymentStaus
	 */
	public String getPaymentStaus() {
		return mPaymentStaus;
	}
	/**
	 * @param pPaymentStaus the paymentStaus to set
	 */
	public void setPaymentStaus(String pPaymentStaus) {
		mPaymentStaus = pPaymentStaus;
	}
	/**
	 * @return the amount
	 */
	public double getAmount() {
		return mAmount;
	}
	/**
	 * @param pAmount the amount to set
	 */
	public void setAmount(double pAmount) {
		mAmount = pAmount;
	}
	/**
	 * @return the payURefId
	 */
	public Integer getPayURefId() {
		return mPayURefId;
	}
	/**
	 * @param pPayURefId the payURefId to set
	 */
	public void setPayURefId(Integer pPayURefId) {
		mPayURefId = pPayURefId;
	}
	/**
	 * @return the api
	 */
	public String getApi() {
		return mApi;
	}
	/**
	 * @param pApi the api to set
	 */
	public void setApi(String pApi) {
		mApi = pApi;
	}
	/**
	 * @return the safeKey
	 */
	public String getSafeKey() {
		return mSafeKey;
	}
	/**
	 * @param pSafeKey the safeKey to set
	 */
	public void setSafeKey(String pSafeKey) {
		mSafeKey = pSafeKey;
	}
	/**
	 * @return the merchantRef
	 */
	public String getMerchantRef() {
		return mMerchantRef;
	}
	/**
	 * @param pMerchantRef the merchantRef to set
	 */
	public void setMerchantRef(String pMerchantRef) {
		mMerchantRef = pMerchantRef;
	}
	/**
	 * @return the payUReference
	 */
	public String getPayUReference() {
		return mPayUReference;
	}
	/**
	 * @param pPayUReference the payUReference to set
	 */
	public void setPayUReference(String pPayUReference) {
		mPayUReference = pPayUReference;
	}
	/**
	 * @return the paymentGroup
	 */
	public PaymentGroup getPaymentGroup() {
		return mPaymentGroup;
	}
	/**
	 * @param pPaymentGroup the paymentGroup to set
	 */
	public void setPaymentGroup(PaymentGroup pPaymentGroup) {
		mPaymentGroup = pPaymentGroup;
	}
	/**
	 * @return the orderId
	 */
	public String getOrderId() {
		return mOrderId;
	}
	/**
	 * @param pOrderId the orderId to set
	 */
	public void setOrderId(String pOrderId) {
		mOrderId = pOrderId;
	}
	/**
	 * @return the order
	 */
	public Order getOrder() {
		return mOrder;
	}
	/**
	 * @param pOrder the order to set
	 */
	public void setOrder(Order pOrder) {
		mOrder = pOrder;
	}
}
