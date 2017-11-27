var apiBaseSlug = 'v1/deals/';

// Add trailing slashes to all endpoints
module.exports = {
	COMMON_DEALS: apiBaseSlug,
	COMMON_DTO_DEALS: apiBaseSlug + 'Dto/',
	DEAL_QUICK_SEARCH: apiBaseSlug + 'quickSearch/'
}