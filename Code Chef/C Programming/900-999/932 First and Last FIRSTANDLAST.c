#include <stdio.h>
int main()
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        int arr[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&arr[j]);
        }
        int max=arr[0]+arr[n-1];
        for(int j=0;j<n-1;j++)
        {
            if((arr[j]+arr[j+1])>max)
            {
                max=arr[j]+arr[j+1];
            }
        }
        printf("%d\n",(max));
    }
    return 0;
}
