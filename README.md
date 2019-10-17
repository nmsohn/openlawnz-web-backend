## openlawnz-backend

This is the temporary solution for the private API. Auth0 has been setup by Noel if you have any questions about it slack him.

If you are new be sure to read the workflow [Wiki](https://github.com/openlawnz/openlawnz-api/wiki).

## Setup

Requires Linux (maybe macOS)

Make a ```.env``` file with the database connection details.

	yarn install
	npm run dev:nodist

Visit https://api.openlaw.nz/graphiql to try out the API
Use this uri for the api: https://api.openlaw.nz/graphql

## Deploy

Make sure conflicts are resolved first.
Send a Pull request to the master branch
When Approved to master branch should be set up with a deployment pipeline and it will be deployed.

## NOTICE

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
