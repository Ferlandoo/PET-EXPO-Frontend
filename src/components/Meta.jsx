import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keyword} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To PET EXPO',
  description: 'Gallery of birds, cats and dogs.',
  keyword: 'pet, expo, gallery, birds, cats, dogs'
};

export default Meta
