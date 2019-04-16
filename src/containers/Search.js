import { connect } from 'react-redux'
import Search from '../components/Search'
import { searchDocument, getSources } from '../actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    search: query => searchDocument(query)(dispatch),
    getsources: () => getSources()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)