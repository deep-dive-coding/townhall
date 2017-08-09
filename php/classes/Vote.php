<?php
namespace Edu\Cnm\vote;
/**
* vote Class
 * This class stores all the vote data and the time of the vote
* Referenced by Profile and Post
*
 * @author Michelle Allen <mbojorquez4@cnm.edu>
 * @version 1.0
*/
class Vote {
	/**
	 * id for the original post; this is the primary key
	 * @var int $postVoteId
	 **/
	private $postVoteId;
	/**
	 * id of the profile that voted on post; this is a foreign key
	 * @var int $voteProfileId
	 **/
	private $voteProfileId;
	/**
	 * date and time the vote was posted, in a PHP DateTime object
	 * @var \DateTime $voteDateTime
	 **/
	private $voteDateTime;
	/**
	 * value of the vote that was posted, int as 1 or -1
	 * @var int $voteValue
	 */
	private $voteValue;

	/**
	 * constructor for this vote
	 *
	 * @param int $newPostVoteId id for this vote
	 * @param int $newVoteProfileId id for the Profile that voted on this post
	 * @param \DateTime|string|null $newVoteDateTime date and time vote was sent or null if set to current date and time
	 * @param int $newVoteValue value for this vote
	 * @throws \InvalidArgumentException if data types are not valid
	 * @throws \RangeException if data values are out of bounds (e.g., strings too long, negative integers)
	 * @throws \TypeError if data types violate type hints
	 * @throws \Exception if some other exception occurs
	 * @Documentation https://php.net/manual/en/language.oop5.decon.php
	 **/
	public function __construct(?int $newPostVoteId, int $newVoteProfileId, $newVoteDateTime = null, int $newVoteValue) {
		try {
			$this->setPostVoteId($newPostVoteId);
			$this->setVoteProfileId($newVoteProfileId);
			$this->setVoteDateTime($newVoteDateTime);
			$this->setVoteValue($newVoteValue);
		}
			//determine what exception type was thrown
		catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 0, $exception));
		}
		}

	/**
	 * accessor method for postVoteId id
	 *
	 * @return int|null value of postVoteID id
	 **/
	public function getPostVoteId() : int {
		return($this->postVoteId);
	}

/**
 * mutator method for postVoteID id
 *
 * @param int|null $newPostVoteId new value of newPostVoteId id
 * @throws \RangeException if $newPostVoteId is not positive
 * @throws \TypeError if $newPostVoteId is not an integer
 **/
	public function setPostVoteId(?int $newPostVoteId) : void {
		//if postVote id is null immediately return it
		if($newPostVoteId === null) {
			$this->postVoteId = null;
			return;

			// verify the postVote id is positive
			if($newpostVoteId <= 0) {
				throw(new \RangeException("postVoteId id is not positive"));
			}

			// convert and store the postVote id
			$this->postVoteId = $newPostVoteId ;
		}

		/**
		 * accessor method for vote profile id
		 *
		 * @return int value of vote profile id
		 **/
		public function getVoteProfileId() : int{
			return($this->VoteProfileId);
		}

		/**
		 * mutator method for vote profile id
		 *
		 * @param int $newVoteProfileId new value of vote profile id
		 * @throws \RangeException if $newVoteProfileId is not positive
		 * @throws \TypeError if $newVoteProfileId is not an integer
		 **/


