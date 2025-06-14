//election commission wants to count of eligible voters

//'N' people in Chefland. Age of <i>th person is A<i>

//'X' --> valid age for voting.

//'T' --> Test Cases
#include <stdio.h>
int main(void)
{
	int T,N,X;
	scanf("%d",&T);
	for(int i=0;i<T;i++)
	{
	    scanf("%d %d",&N,&X);                   //taking array(no. of voters & valid age as input)
	    int a[N];                               //initalizing valid array
	    int cnt=0;                              //variable denoting eligible voters
	    for(int j=0;j<N;j++)
	    {
	        scanf("%d",&a[j]);                  //taking each voter's age as input
	        if(a[j]>=X)
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}