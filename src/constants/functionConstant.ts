export abstract class FunctionConstant {
  //service functions
  static readonly FUNC_GET_ADD_TOKEN_RESPONSE = 'FuncGetAddTokenResponse';
  static readonly FUNC_GENERATE_CAPTURE_CONTEXT = 'FuncGenerateCaptureContext';
  static readonly FUNC_GET_TRANSACTION_SEARCH_RESPONSE = 'FuncGetTransactionSearchResponse';
  static readonly FUNC_GET_CREATE_WEBHOOK_SUBSCRIPTION_RESPONSE = 'FuncGetCreateWebhookSubscriptionResponse';
  static readonly FUNC_GET_CONVERSION_DETAILS = 'FuncGetConversionDetails';
  static readonly FUNC_DELETE_CUSTOMER_TOKEN = 'FuncDeleteCustomerToken';
  static readonly FUNC_DELETE_WEBHOOK_SUBSCRIPTION_RESPONSE = 'FuncDeleteWebhookSubscriptionResponse';
  static readonly FUNC_GET_FLEX_KEYS = 'FuncGetFlexKeys';
  static readonly FUNC_GET_CARD_BY_INSTRUMENT_RESPONSE = 'FuncGetCardByInstrumentResponse';
  static readonly FUNC_GET_PUBLIC_KEYS = 'FuncGetPublicKeys';
  static readonly FUNC_GET_TRANSACTION_DATA = 'FuncGetTransactionData';
  static readonly FUNC_GET_TRANSIENT_TOKEN_DATA_RESPONSE = 'FuncGetTransientTokenDataResponse';
  static readonly FUNC_GET_WEBHOOK_SUBSCRIPTION_RESPONSE = 'FuncWebhookSubscriptionResponse';
  static readonly FUNC_GET_KEY_GENERATION_RESPONSE = 'FuncGetKeyGenerationResponse';
  static readonly FUNC_GET_PAYER_AUTH_SETUP_DATA = 'FuncGetPayerAuthSetupData';
  static readonly FUNC_GET_AUTH_REVERSAL_RESPONSE = 'FuncGetAuthReversalResponse';
  static readonly FUNC_GET_AUTHORIZATION_RESPONSE = 'FuncGetAuthorizationResponse';
  static readonly FUNC_GET_CAPTURE_RESPONSE = 'FuncGetCaptureResponse';
  static readonly FUNC_GET_REFUND_DATA = 'FuncGetRefundData';
  static readonly FUNC_GET_UPDATE_TOKEN_RESPONSE = 'FuncGetUpdateTokenResponse';

  //Helper functions
  static readonly FUNC_HANDLE_CARD_ADDITION = 'FuncAddCardHandler';
  static readonly FUNC_ADD_CUSTOM_TYPES = 'FuncAddCustomTypes';
  static readonly FUNC_ADD_TRANSACTION = 'FuncAddTransaction';
  static readonly FUNC_ADD_EXTENSIONS = 'FuncAddExtensions';
  static readonly FUNC_HANDLE_APPLE_PAY_SESSION = 'FuncHandleApplePaySession';
  static readonly FUNC_AUTHORIZATION_HANDLER = 'FuncAuthorizationHandler';
  static readonly FUNC_CHANGE_STATE = 'FuncChangeState';
  static readonly FUNC_CHECK_AUTH_REVERSAL_TRIGGERED = 'FuncCheckAuthReversalTriggered';
  static readonly FUNC_GET_CLICK_TO_PAY_RESPONSE = 'FuncGetClickToPayResponse';
  static readonly FUNC_CREATE_RESPONSE = 'FuncCreateResponse';
  static readonly FUNC_DECRYPTION = 'FuncDecryption';
  static readonly FUNC_HANDLE_CARD_DELETION = 'FuncHandleCardDeletion';
  static readonly FUNC_ENCRYPTION = 'FuncEncryption';
  static readonly FUNC_FAILURE_RESPONSE = 'FuncFailureResponse';
  static readonly FUNC_FIELD_MAPPER = 'FuncFieldMapper';
  static readonly FUNC_FIELD_MAPPER_NULL = 'FuncFieldMapperNull';
  static readonly FUNC_GENERATE_DIGEST = 'FuncGenerateDigest';
  static readonly FUNC_GET_ALL_MID_DETAILS = 'FuncGetAllMidDetails';
  static readonly FUNC_GET_APPLICATIONS_PRESENT = 'FuncGetApplicationsPresent';
  static readonly FUNC_GET_AUTH_RESPONSE = 'FuncGetAuthResponse';
  static readonly FUNC_GET_CAPTURED_AMOUNT = 'FuncGetCapturedAmount';
  static readonly FUNC_GET_CARD_TOKENS = 'FuncGetCardTokens';
  static readonly FUNC_GET_CERTIFICATES_DATA = 'FuncGetCertificatesData';
  static readonly FUNC_GET_CREDIT_CARD_RESPONSE = 'FuncGetCreditCardResponse';
  static readonly FUNC_GET_CART_DETAILS_BY_PAYMENT_ID = 'FuncGetCartDetailsByPaymentId';
  static readonly FUNC_GET_CLIENT = 'FuncGetClient';
  static readonly FUNC_GET_ORDERS = 'FuncGetOrders';
  static readonly FUNC_GET_PAYER_AUTH_REVERSAL_HANDLER = 'FuncGetPayerAuthReversalHandler';
  static readonly FUNC_GET_PAYER_AUTH_ENROLL_RESPONSE = 'FuncGetPayerAuthEnrollResponse';
  static readonly FUNC_GET_PAYER_AUTH_SETUP_RESPONSE = 'FuncGetPayerAuthSetUpResponse';
  static readonly FUNC_GET_PAYER_AUTH_VALIDATE_RESPONSE = 'FuncGetPayerAuthValidateResponse';
  static readonly FUNC_GET_TRANSACTION_SUMMARIES = 'FuncGetTransactionSummaries';
  static readonly FUNC_GET_OM_SERVICE_RESPONSE = 'FuncGetOMServiceResponse';
  static readonly FUNC_GET_UPDATE_TOKEN_ACTIONS = 'FuncGetUpdateTokenActions';
  static readonly FUNC_GET_GOOGLE_PAY_RESPONSE = 'FuncGetGooglePayResponse';
  static readonly FUNC_PAYER_AUTH_ACTIONS = 'FuncPayerAuthActions';
  static readonly FUNC_CREATE_ENROLL_RESPONSE_ACTIONS = 'FuncCreateEnrollResponseActions';
  static readonly FUNC_HANDLE_ORDER_MANAGEMENT = 'FuncHandleOrderManagement';
  static readonly FUNC_GET_REFUND_RESPONSE = 'FuncGetRefundResponse';
  static readonly FUNC_HANDLE_REPORT = 'FuncHandleReport';
  static readonly FUNC_GET_CART_BY_ID = 'FuncGetCartById';
  static readonly FUNC_RETRIEVE_CART_BY_CUSTOMER_ID = 'FuncRetrieveCartByCustomerId';
  static readonly FUNC_RETRIEVE_CART_BY_PAYMENT_ID = 'FuncRetrieveCartByPaymentId';
  static readonly FUNC_RETRIEVE_ORDER_BY_CART_ID = 'FuncRetrieveOrderByCartId';
  static readonly FUNC_RETRIEVE_ORDER_BY_PAYMENT_ID = 'FuncRetrieveOrderByPaymentId';
  static readonly FUNC_RETRIEVE_CUSTOMER_OBJECT_BY_CONTAINER = 'FuncRetrieveCustomObjectByContainer'
  static readonly FUNC_RETRIEVE_PAYMENT = 'FuncRetrievePayment';
  static readonly FUNC_RUN_SYNC_ADD_TRANSACTION = 'FuncRunSyncAddTransaction';
  static readonly FUNC_SET_CUSTOMER_TOKEN_DATA = 'FuncSetCustomerTokenData';
  static readonly FUNC_SET_CUSTOMER_TOKENS = 'FuncSetCustomerTokens';
  static readonly FUNC_SET_CUSTOM_TYPE = 'FuncSetCustomType';
  static readonly FUNC_SET_TRANSACTION_ID = 'FuncSetTransactionId';
  static readonly FUNC_SET_UP_EXTENSION_RESOURCE = 'FuncSetUpExtensionResources';
  static readonly FUNC_SET_UP_ZIP_FILE = 'setUpZipFile'
  static readonly FUNC_HANDLE_SYNC = 'FuncHandleSync';
  static readonly FUNC_UPDATE_CART_BY_PAYMENT_ID = 'FuncUpdateCartByPaymentId';
  static readonly FUNC_UPDATE_CART_WITH_UC_ADDRESS = 'FuncUpdateCartWithUCAddress';
  static readonly FUNC_HANDLE_UPDATE_CARD = 'FuncHandleUpdateCard';
  static readonly FUNC_UPDATE_CUSTOM_FIELDS = 'FuncUpdateCustomField';
  static readonly FUNC_UPDATE_DECISION_SYNC = 'FuncUpdateDecisionSync';
  static readonly FUNC_UPDATE_SYNC = 'FuncUpdateSync';
  static readonly FUNC_SYNC_ADD_TRANSACTION = 'FuncSyncAddTransaction';
  static readonly FUNC_SYNC_VISA_CARD_DETAILS = 'FuncSyncVisaCardDetails';
  static readonly FUNC_GET_AUTHORIZED_AMOUNT = 'FuncGetAuthorizedAmount';
  static readonly FUNC_UPDATE_AVAILABLE_AMOUNT = 'FuncUpdateAvailableAmount';
  static readonly FUNC_ADD_REFUND_ACTION = 'FuncAddRefundAction';
  static readonly FUNC_MAP_PAYMENT_INFORMATION = 'FuncMapPaymentInformation';
  static readonly FUNC_QUERY_CART_BY_ID = 'FuncQueryCartById';
  static readonly FUNC_QUERY_ORDER_BY_ID = 'FuncQueryOrderById';
  static readonly FUNC_GET_CUSTOMER = 'FuncGetCustomer';
  static readonly FUNC_GET_CUSTOM_TYPE = 'FuncGetCustomType';
  static readonly FUNC_CHANGE_TRANSACTION_INTERACTION_ID = 'FuncChangeTransactionInteractionId';
  static readonly FUNC_ADD_CUSTOM_FIELD = 'FuncAddCustomField';
  static readonly FUNC_ADD_CUSTOMER_ADDRESS = 'FuncAddCustomerAddress';
  static readonly FUNC_CREATE_CT_CUSTOM_OBJECT = 'FuncCreateCTCustomObject';
  static readonly FUNC_UPDATE_CUSTOMER_TOKEN = 'FuncUpdateCustomerToken';
  static readonly FUNC_RETRIEVE_CUSTOMER_BY_CUSTOM_FIELD = 'FuncRetrieveCustomerByCustomField';
  static readonly FUNC_GET_DISCOUNT_CODES = 'FuncGetDiscountCodes';
  static readonly FUNC_HANDLE_EXISTING_SUBSCRIPTION = 'FuncHandleExistingSubscription';
  static readonly FUNC_HANDLE_WEBHOOK_KEY_GENERATION_RESPONSE = 'FuncHandleWebhookKeyGenerationResponse';
  static readonly FUNC_HANDLE_SUBSCRIPTION_UPDATE = 'FuncHandleSubscriptionUpdate';
  static readonly FUNC_CREATE_NEW_SUBSCRIPTION = 'FuncCreateNewSubscription';
  static readonly FUNC_HANDLE_WEBHOOK_SUBSCRIPTION = 'FuncHandleWebhookSubscription';
  static readonly FUNC_CARD_DETAILS_ACTION = 'FuncCardDetailsAction';
  static readonly FUNC_HANDLE_ORDER_MANAGEMENT_AUTH_REVERSAL = 'FuncHandleOrderManagementAuthReverse';
  static readonly FUNC_HANDLE_AUTHORIZATION = 'FunchandleAuthorization';
  static readonly FUNC_HANDLE_PAYER_AUTH_REVERSAL = 'FuncHandlePayerAuthReversal';
  static readonly FUNC_HANDLE_ORDER_MANAGEMENT_FOR_CHARGE = 'FuncHandleOrderManagementForCharge';
  static readonly FUNC_HANDLE_NETWORK_TOKEN = 'FuncHandleNetWorkToken';
  static readonly FUNC_GET_MID_CREDENTIALS = 'FuncGetMidCredentials';
  static readonly FUNC_GET_PAYMENT_RESPONSE = 'FuncGetPaymentResponse';
  static readonly FUNC_PROCESS_INVALID_CARD_RESPONSE = 'FuncProcessInvalidCardResponse';
  static readonly FUNC_HANDLE_PAYMENT_AUTH = 'FuncHandlePaymentAuth';
  static readonly FUNC_TEST_API_CONNECTION = 'FuncTestApiConnection';
  static readonly FUNC_HANDLE_TEST_CONNECTION = 'FuncHandleTestConnection';

  //requestBuilder Functions
  static readonly FUNC_GET_CONFIG_OBJECT = 'FuncGetConfigObject';
  static readonly FUNC_GET_META_DATA = 'FuncGetMetaData';

  //utils Functions
  static readonly FUNC_SYNC_EXTENSIONS = 'FuncSyncExtensions';
  static readonly FUNC_SYNC_CUSTOM_TYPE = 'FuncSyncCustomType';
  static readonly FUNC_SET_TRANSACTION_CUSTOM_TYPE = 'FuncSetTransactionCustomType';
  static readonly FUNC_EVALUATE_TOKEN_CREATION = ' FuncEvaluateTokenCreation';
  static readonly FUNC_UPDATE_CARD_DETAILS = 'FuncUpdateCardDetails';
  static readonly FUNC_ADD_TOKEN_ADDRESS_FOR_UC = 'FuncAddTokenAddressForUC';
  static readonly FUNC_HANDLE_TOKEN_CREAION = 'FuncHandleTokenCreation';
  static readonly FUNC_GET_CUSTOM_TYPES = 'FuncGetCustomTypes';
  static readonly FUNC_SET_CUSTOM_FIELD_MAPPER = 'FuncSetCustomFieldMapper';
  static readonly FUNC_SET_CUSTOM_FIELD_TO_NULL = 'FuncSetCustomFieldToNull';
  static readonly FUNC_AUTHENTICATE_NET_TOKEN = 'FunAuthenticateNetToken';
  static readonly FUNC_GET_REQUEST_OBJ = 'FuncGetRequestObj';
  static readonly FUNC_SET_OBJECT_VALUE = 'FuncSetObjectValue';
  static readonly FUNC_ADD_CUSTOM_TYPE = 'FuncAddCustomType';

  //Controller Functions
  static readonly FUNC_PAYMENT_CREATE_API = 'FuncPaymentCreateApi';
  static readonly FUNC_PAYMENT_UPDATE_API = 'FuncPaymentUpdateApi';
  static readonly FUNC_CUSTOMER_UPDATE_API = 'FuncCustomerUpdateApi';
  static readonly FUNC_PAYMENT_DETAILS_API = 'FuncPaymentDetailsApi';
  static readonly FUNC_CAPTURE_CONTEXT_API = 'FuncCaptureContextApi';
  static readonly FUNC_NOTIFICATION_API = 'FuncNotificationApi';
  static readonly FUNC_AUTHENTICATION = 'FuncAuthentication';
  static readonly FUNC_REQUEST_HANDLER = 'FuncRequestHandler';
  static readonly FUNC_HANDLE_PAYMENTS_DATA = 'FuncHandlePaymentsData';
  static readonly FUNC_HANDLE_PAYMENT_CREATE = 'FuncHandlePaymentCreate';
  static readonly FUNC_HANDLE_PAYMENT_UPDATE = 'FuncHandlePaymentUpdate';
  static readonly FUNC_HANDLE_CUSTOMER_UPDATE = 'FuncHandleCustomerUpdate';
  static readonly FUNC_HANDLE_AUTH_REVERSAL = 'FuncHandleAuthReversal';
  static readonly FUNC_HANDLE_CAPTURE = 'FuncHandleCapture';
  static readonly FUNC_HANDLE_REFUND = 'FuncHandleRefund';
  static readonly FUNC_HANDLE_POST_NET_TOKEN_NOTIFICATION = 'FuncHandlePostNetTokenNotification';
  static readonly FUNC_HANDLE_CAPTURE_CONTEXT = 'FuncHandleCaptureContext';
  static readonly FUNC_CREATE_WEBHOOK_SUBSCRIPTION = 'FuncCreateWebhookSubscription';
  static readonly FUNC_ORDER_MANAGEMENT_API = 'FuncOrderManagementApi';
}