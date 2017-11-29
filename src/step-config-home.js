import assign from 'object-assign'

// Pre-configured step types
import CategoryStep from 'quickcommerce-react/steps/Category.jsx'
import ProductStep from 'quickcommerce-react/steps/Product.jsx'
import ProductOptionStep from 'quickcommerce-react/steps/ProductOption.jsx'

export default [{
    config: assign({}, CategoryStep, {
        stepId: 'shop',
        indicator: '1',
        title: 'Choose Category'
    }),
    before: (stepId, step) => {
        console.log('load category step...')
        return true
    },
    action: (step, data, done) => {
        this.topCategoryBrowser.actions.loadCategories()

        if (done) {
            // Process checkout if done
            this.onComplete()
        }
    },
    validate: (stepId, stepDescriptor, data) => {
        console.log('validating current step: ' + stepId)
        console.log(data)
        
        let categoryId = data['category_id'] || null
        
        if (categoryId === null) {
            alert('Please select a category to continue')
            return false
        }
        
        return true
    }
},
{
    config: assign({}, ProductStep, {
        stepId: 'cart',
        indicator: '2',
        title: 'Choose Product'
    }),
    before: (stepId, step) => {
        console.log('load product step...')
        return true
    },
    action: (step, data, done) => {
        data = data || null                
        if (data !== null &&
            data.hasOwnProperty('category_id') &&
            !Number.isNaN(data.category_id)) {
                
            this.currentlyRoastingBrowser.actions.loadProducts(data.categoryId)
            this.specialRoastsBrowser.actions.loadProducts(data.categoryId)
            this.newArrivalsBrowser.actions.loadProducts(data.categoryId)
        } else {
            this.currentlyRoastingBrowser.actions.loadProducts()
            this.specialRoastsBrowser.actions.loadProducts()
            this.newArrivalsBrowser.actions.loadProducts()
        }

        if (done) {
            // Process checkout if done
            this.onComplete()
        }
    },
    validate: (stepId, stepDescriptor, data) => {
        console.log('validating current step: ' + stepId)
        console.log(data)
        
        let productId = data['id'] || null
        
        if (productId === null) {
            alert('Please select a product to continue')
            return false
        }
        
        return true
    }
},
{
    config: assign({}, ProductOptionStep, {
        stepId: 'options',
        indicator: '3',
        title: 'Customize Product'
    }),
    before: (stepId, step) => {
        console.log('load option step...')
        return true
    },
    action: (step, data, done) => {
        data = data || null
        // Store the selection
        
        if (data !== null &&
            data.hasOwnProperty('id') &&
            !Number.isNaN(data.id)) {

            this.optionBrowser.actions.loadOptions(data) // TODO: CONST for prop name?
        } else {
            // Do nothing - options only correlate to a browser item
            // TODO: This is being triggered when clicking a browser item, but there's no data object...
        }

        if (done) {
            // Process checkout if done
            this.onComplete()
        }
    },
    validate: (stepId, stepDescriptor, data) => {
        console.log('validating current step: ' + stepId)
        console.log(data)
        
        return true
    }
},
/*{
    config: {
        stepId: 'checkout',
        indicator: '4',
        title: 'Review Your Order'
    },
    // 'action' must be defined, even if empty
    action: (step, data, done) => {
    }
},*/
/*{
    config: {
        stepId: 'confirm',
        indicator: '5',
        title: 'Confirm Order'
    },
    // 'action' must be defined, even if empty
    action: (step, data, done) => {
    }
}*/]