import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudUploadAlt, faShieldAlt, faDatabase } from "@fortawesome/free-solid-svg-icons"

const MyComponent = ({ backgroundColor, title, content, image }) => {
  return (
    <div className={`overflow-hidden bg-gray `}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">{title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{content}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">{content}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <FontAwesomeIcon icon={faCloudUploadAlt} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Push to deploy.
                  </dt>
                  <dd className="inline">{content}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <FontAwesomeIcon icon={faShieldAlt} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    SSL certificates.
                  </dt>
                  <dd className="inline">{content}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <FontAwesomeIcon icon={faDatabase} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Database backups.
                  </dt>
                  <dd className="inline">{content}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyComponent