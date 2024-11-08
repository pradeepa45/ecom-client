import { ApolloError } from "@apollo/client";

interface ErrorObject {
  message?: string;
  networkError?: {
    result?: {
      errors?: any[];
    };
  };
}
const DisplayError = ({ error }: { error: ApolloError }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result) {
    return error.networkError.result.errors?.map((error, i) => (
      <div key={i} className="p-8 my-8 border border-l-2">
        <p data-test="graphql-error" className="font-thin">
          <strong className="mr-4">Shoot!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </div>
    ));
  }
  return (
    <div>
      <p data-test="graphql-error" className="font-thin">
        <strong className="mr-4">Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  );
};

export default DisplayError;
