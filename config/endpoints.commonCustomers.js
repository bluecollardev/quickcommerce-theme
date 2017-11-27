var apiBaseSlug = 'v1/customers/';

// Add trailing slashes to all endpoints
module.exports = {
	COMMON_CUSTOMERS: apiBaseSlug,
	COMMON_DTO_CUSTOMERS: apiBaseSlug + 'Dto/',
	CUSTOMER_QUICK_SEARCH: apiBaseSlug + 'quickSearch/'
}